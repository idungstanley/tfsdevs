import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  onEnded?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, onEnded }) => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (onEnded) onEnded();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressRef.current;
    if (!progressBar || !videoRef.current) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
      if (newMuted) {
        setVolume(0);
      } else {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const controlsBg = theme === 'dark' ? 'bg-gray-900/90' : 'bg-gray-100/90';

  return (
    <div className={`relative rounded-lg overflow-hidden ${bgColor} ${isFullscreen ? "h-screen w-screen":"h-full"}`}>
      <video ref={videoRef} src={src} poster={poster} className="w-full aspect-video" onClick={togglePlay} />

      {/* Video Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${controlsBg} p-4 transition-opacity duration-300 opacity-100 hover:opacity-100`}
      >
        {/* Progress Bar */}
        <div
          ref={progressRef}
          className="h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
          onClick={handleProgressClick}
        >
          <div className="h-full bg-indigo-500 rounded-full relative" style={{ width: `${progress}%` }}>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button onClick={togglePlay} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Skip Buttons */}
            <button onClick={() => skip(-10)} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <SkipBack size={20} />
            </button>
            <button onClick={() => skip(10)} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <SkipForward size={20} />
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-indigo-500"
              />
            </div>

            {/* Time Display */}
            <div className="text-sm">
              <span>{formatTime(currentTime)}</span>
              <span className="mx-1">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Fullscreen */}
          <button onClick={toggleFullscreen} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <Maximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
