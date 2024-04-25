
import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideo = ({videos , handleVideoClick}) => {
    function abbreviateNumber(number) {
        const SI_SYMBOL = ["", "K", "M", "B", "T"];
        const tier = Math.log10(Math.abs(number)) / 3 | 0;
        if (tier === 0) return number;
        const suffix = SI_SYMBOL[tier];
        const scale = Math.pow(10, tier * 3);
        const scaled = number / scale;
        return scaled.toFixed(1) + suffix;
      }
  return (
    <div className='ds-flex justify-content-between' style={{ width: '100%', marginLeft: '0px' }}>
      <div className='containers'>
        <div className='rows'>
          {Array.isArray(videos) && videos.map(video => (
            <div className='col-md-4 my-3' style={{width:'100%'}} key={videos.id}>
              <Link to={`/videoplayer/${video.id}`} style={{ textDecoration: 'none', color: 'inherit' }}  onClick={() => handleVideoClick(video.id)}>
                <div className="cards" style={{ marginLeft:'5px',  display:'flex' ,alignItems:'center'}}>
                  <div className='Imagess'>
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} style={{width:'150px' ,height:'100px' , borderRadius:'10px'}} />
                  </div>
                  <div className='channel'>
                    <img src='' alt="" className="channel-thumbnail" />
                    <div className='channel-details' style={{marginLeft:'13px'}}>
                      <h3 className="video-title" >{video.snippet.title}</h3>
                      <p className="channel-name">{video.snippet.channelTitle}</p>
                      <div><p className="video-view">{abbreviateNumber(video.statistics.viewCount)} views</p></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;
