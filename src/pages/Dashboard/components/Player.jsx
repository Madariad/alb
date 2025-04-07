import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  RotateCcw,
  SkipForward 
} from 'lucide-react';

import './plyear.css'; // Assuming you have a CSS file for styles

export default function Player({ url }) {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const getVideoId = (url) => {
    try {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get('v');
    } catch (error) {
      console.error('Invalid YouTube URL:', error);
      return null;
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      controls: 0,
      showinfo: 0,
      fs: 0,
      playsinline: 1,
      iv_load_policy: 3,
      disablekb: 1,
      origin: window.location.origin
    },
  };

  useEffect(() => {
    let animationFrameId;
    
    const updateTime = () => {
      if (playerRef.current && isPlaying) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
      animationFrameId = requestAnimationFrame(updateTime);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(updateTime);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const onReady = (event) => {
    playerRef.current = event.target;
    setDuration(event.target.getDuration());
    setLoading(false);
    event.target.setVolume(volume);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    const value = parseFloat(e.target.value);
    const newTime = (value * duration) / 100;
    playerRef.current?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    playerRef.current?.setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleMute = () => {
    if (isMuted) {
      playerRef.current?.unMute();
      playerRef.current?.setVolume(volume);
    } else {
      playerRef.current?.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const handleRewind = () => {
    const newTime = Math.max(currentTime - 10, 0);
    playerRef.current?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const handleForward = () => {
    const newTime = Math.min(currentTime + 10, duration);
    playerRef.current?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTouchStart = () => {
    setIsTouching(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouching(false), 3000);
  };

  return (
    <div 
      ref={containerRef}
      className="player-wrapper relative group bg-black rounded-2xl overflow-hidden w-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="aspect-video relative" style={{ zIndex: 1 }}>
        <YouTube
          videoId={getVideoId(url)}
          opts={opts}
          onReady={onReady}
          onStateChange={(e) => setIsPlaying(e.data === 1)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="absolute top-0 left-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Click overlay */}
      <div 
        className="absolute inset-0 z-10 cursor-pointer" 
        onClick={handlePlayPause}
      />

      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Controls */}
      <div 
        className={`
          absolute bottom-0 left-0 right-0 
          bg-gradient-to-t from-black/90 to-transparent 
          p-4 z-30 transition-opacity duration-300
          ${isTouching ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
      >
        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white text-xs md:text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleTimeUpdate}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="text-white text-xs md:text-sm">{formatTime(duration)}</span>
        </div>

        {/* Control buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={handleRewind}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={handlePlayPause}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6" />
              )}
            </button>

            <button 
              onClick={handleForward}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={handleMute}
                className="text-white hover:text-blue-400 transition-colors p-2"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-blue-400 transition-colors p-2"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Maximize className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}