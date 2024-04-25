import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import SearchList from './SearchList';
import API_KEY from '../Api-Key';
import './styless/loding.css'

const SearchResults = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageToken, setPageToken] = useState('');
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
  
    useEffect(() => {
        fetchVideos();
    }, [query]); 
    const fetchVideos = async () => {
    setLoading(true);
    try {
        // Fetch search results
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: API_KEY,
                part: 'snippet',
                maxResults: 10,
                q: query,
                pageToken: pageToken, // Include pageToken parameter
            },
        });
        setPageToken(response.data.nextPageToken);
        const videoItems = response.data.items;

        // Extract video IDs from search results
        const videoIds = videoItems.map(item => item.id.videoId);

        // Fetch detailed information for each video
        const detailedResponses = await Promise.all(videoIds.map(videoId => (
            axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    key: API_KEY,
                    part: 'snippet,statistics', // Include statistics
                    id: videoId,
                },
            })
        )));

        // Combine detailed information with search results
        const videosWithDetails = detailedResponses.map((response, index) => ({
            ...videoItems[index], // Use videoItems, not searchResponse.data.items
            statistics: response.data.items[0].statistics, // Correct path to statistics
        }));

        // Update videos state
        setVideos(prevVideos => [...videosWithDetails ]); // Append new videos to existing videos
    } catch (error) {
        console.error('Error fetching videos:', error);
    } finally {
        setLoading(false);
    }
};

  
    return (
        <div>
            <SearchList videos={videos} />
            {loading && <div className='centerOF'>
                <div className="loader"></div>
            </div>}
        </div>
    );
};

export default SearchResults