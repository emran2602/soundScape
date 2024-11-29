'use client';

import { createContext, useState } from 'react';

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <VideoContext.Provider value={{ videos, currentIndex, setVideos, handleNext }}>
      {children}
    </VideoContext.Provider>
  );
}

export default VideoContext;
