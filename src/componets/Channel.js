// ChannelPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Channel = () => {
  const { channelId } = useParams();
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      try {
        // Fetch videos for the selected channel
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/video`, {
          params: {
            key: 'YOUR_API_KEY',
            channelId: channelId,
            part: 'snippet',
            maxResults: 10,
            type: 'video',
          },
        });
        setChannelVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching channel videos:', error);
      }
    };

    fetchChannelVideos();
  }, [channelId]);

  return (
    <div>
      {/* Display channel videos */}
      {channelVideos.map(video => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          {/* Add video player or link to video here */}
        </div>
      ))}
    </div>
  );
};

export default Channel;
