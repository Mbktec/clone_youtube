import React from 'react';

const Video = ({ video: { id: {videoId} } }) => {
     
     if (!videoId) return <p className="noResult">No Results</p>;
     const videoSrc = `https://www.youtube.com/embed/${videoId}`;
     
     return (
          <div>
               <div className="videoIframe">
                    <iframe 
                         frameBorder="0"
                         allowFullScreen
                         title="Video player"
                         src={videoSrc}
                    />
               </div>
              
          </div>
     );
};

export default Video;