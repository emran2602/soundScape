'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import VideoContext from '@/context/VideoContext';

export default function Soundscape() {
  const { videos, currentIndex, setVideos, handleNext } = useContext(VideoContext);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetch('/metadata.json')
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setIsReady(true);
      });
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSoundscape = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.blur();
    }
    handleNext();
  };

  if (!isReady) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-b from-[#3B2F2F] via-[#4A3F35] to-[#5A4B41] text-gray-100 overflow-hidden p-0 m-0 pb-16">
      <h1 className="text-3xl font-semibold mb-6 border-b-2 border-gray-500 pb-2 text-gray-300">
        {videos[currentIndex].title}
      </h1>
      <video
        ref={videoRef}
        src={videos[currentIndex].file}
        autoPlay
        loop
        playsInline
        disablePictureInPicture
        className="max-h-[80vh] w-auto rounded-lg shadow-lg border-4 border-gray-600"
        onClick={togglePlayPause}
      />
      <button
        onClick={nextSoundscape}
        className="mt-8 px-6 py-3 bg-[#7A1F33] text-gray-100 rounded-lg hover:bg-[#9A2D45] transition duration-300 shadow-lg border border-gray-600"
      >
        Next Soundscape
      </button>
      <div className="fixed bottom-2 right-4 bg-gray-800 text-gray-100 py-1 px-3 rounded-lg shadow-lg">
        Emran Majidy
      </div>
    </div>
  );
}
