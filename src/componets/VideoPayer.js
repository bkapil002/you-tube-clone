// VideoPlayer.js
import React, {  useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styless/Videopayer.css'
import ReactPlayer from 'react-player';
import API_KEY from '../Api-Key';
import axios from 'axios';
import user from './Image/user_profile.jpg'
import RelatedVideo from './RelatiedVideo';

const VideoPayer = () => {

  const handleVideoClick = (videoId) => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

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
          maxResults: 10, 
          chart: 'mostPopular',
          videoCategoryId: '15',
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



  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  const handleThumbsUpClick = () => {
    setThumbsUpClicked(true);
    setThumbsDownClicked(false); 
  };

  const handleThumbsDownClick = () => {
    setThumbsDownClicked(true);
    setThumbsUpClicked(false); 
  };

  const [subscribed, setSubscribed] = useState(true);

  const handleButtonClick = () => {
    setSubscribed(!subscribed);
  };

  function abbreviateNumber(number) {
    const SI_SYMBOL = ["", "K", "M", "B", "T"];
    const tier = Math.log10(Math.abs(number)) / 3 | 0;
    if (tier === 0) return number;
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    return scaled.toFixed(1) + suffix;
  }





















  const { videoId } = useParams();
  const {videoRef} = useRef(null)
  const [videoTitle, setVideoTitle] = useState('');
  const [channelImage, setChannelImage] = useState('');
  const [channelName, setChannelName] = useState('');
  const [subscriberCount, setSubscriberCount] = useState('');
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState([]);
 





 


  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const videoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`);
        const videoData = videoResponse.data.items[0].snippet;
        setVideoTitle(videoData.title);

        const channelId = videoData.channelId;
        const channelResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${API_KEY}&part=snippet,statistics`);
        const channelData = channelResponse.data.items[0].snippet;
        setChannelImage(channelData.thumbnails.medium.url);
        setChannelName(channelData.title);

        const subscriberCount = channelResponse.data.items[0].statistics.subscriberCount;

        setSubscriberCount(subscriberCount);


        const commentResponse = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=1000000`);
        setComments(commentResponse.data.items);
        setTotalComments(commentResponse.data.pageInfo.totalResults);

      
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };
    if (videoId) { // Ensure fetch is triggered only when videoId is available
      fetchVideoDetails();
    }

  }, [videoId]);


















  
  return (
   <div className="videoss">
    <div className='fulldetails' style={{}}>
    <div></div>
        <div className='video-player'> 
            <div className='video'>
                <ReactPlayer ref={videoRef} url={`https://www.youtube.com/watch?v=${videoId}`} width="100%" height="100%" controls />
            </div>
        </div>
        <div className='data'>
            <h4>{videoTitle}</h4>
        </div>
        <div className='subcribe'>
            <div className='channel'>
                <img className="channel-thumbnail-2" src={channelImage} alt=''/>
                <div className='name-channel' ><h5>{channelName}</h5> <p>{abbreviateNumber(subscriberCount)} subscribers</p></div>
                <button onClick={handleButtonClick}> <span> {subscribed ? 'Subscribe' : 'Subscribed'}</span></button>
            </div>
            <div className='button-l-ul'>
                <div className='like-dislike'>
                    <i   className={`fa-solid fa-thumbs-up ${thumbsUpClicked ? 'thumbs-up-clicked' : ''}`} onClick={handleThumbsUpClick} ></i>
                    <div className='center-line'></div>
                    <i className={`fa-solid fa-thumbs-down ${thumbsDownClicked ? 'thumbs-up-clicked' : ''}`} onClick={handleThumbsDownClick} ></i>
                </div>
            </div>
        </div>
        <div className='comment'>
            <h4>{totalComments} Comment</h4>
            <div>
                {comments.map(comment =>(
                    <div className='user-comments' key={comment.id}>
                        <img src={!comment.snippet.topLevelComment.snippet.authorProfileImageUrl ? user : comment.snippet.topLevelComment.snippet.authorProfileImageUrl } alt='user'/>
                        <div className='comments-data'>
                            <h5>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h5>
                            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    <RelatedVideo videos={videos} handleVideoClick={handleVideoClick} />
</div>
  );
};



export default VideoPayer;
