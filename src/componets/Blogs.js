import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styless/Home.css';
import API_KEY from '../Api-Key';
import VideoList from './VideoList';
import './styless/loding.css'


const Blogs = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState('');

  useEffect(() => {
    fetchVideos();
  }, [ ]);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: API_KEY,
          part: 'snippet,statistics',
          maxResults: 60, 
          chart: 'mostPopular',
          videoCategoryId: '22',
          pageToken: pageToken,
        },
      });
      setVideos(prevVideos => [...prevVideos, ...response.data.items]);
      setPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    fetchVideos();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
   <div>
    <VideoList videos ={videos}/>
    {loading &&<div className='centerOF'>
          <div class="loader"></div>
        </div>}
   </div>
  );
};

export default Blogs;
