// VideoList.js
import React from 'react';
import user from './Image/user_profile.jpg';
import './styless/Home.css'
import { Link } from 'react-router-dom';
function VideoList({ videos }) {
  return (
    <div>
       <div className='d-flex justify-content-between' style={{ width: '100%', marginLeft: '0px' }}>
        <div className='container'>
          <div className='row'>
            {Array.isArray(videos) && videos.map(video  => (
              <div className='col-md-4 my-3' >
                <Link to={`/videoplayer/${video.id.videoId}`} target>
                <div className="card"  style={{ width: '' }}>
                  <div className='Images'>
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                  </div>
                  <div className='channel'>
                    <img src={user} alt="" className="channel-thumbnail" />
                    <div className='chanel-details' style={{marginLeft:'13px'}}>
                      <h3 className="video-title">{video.snippet.title}</h3>
                      <p className="channel-name">{video.snippet.channelTitle}</p>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
