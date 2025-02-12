// VideoBackground.js

import React, { useRef, useEffect } from 'react';

const VideoBackground = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { 
      video.loop = true;
      video.autoplay = true;
      video.muted = true;
      video.volume = 0;
    }
  }, );

  return (
    <div >
      <video ref={videoRef} src={videoUrl}  />
    </div>
        <div>
        <VideoBackground videoUrl="https://cdn.dribbble.com/userupload/11001831/file/original-ec7c060b81c016f968e7cc3bf103a6a0.mp4" />
        {/* Your other page content */}
      </div>
  );
};
