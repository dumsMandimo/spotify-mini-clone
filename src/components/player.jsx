
import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Shuffle, 
  Volume2, 
  VolumeX,
  Heart,
  Maximize2,
  Mic2
} from 'lucide-react';
import './player.css';

const Player = ({ currentTrack, onTrackEnd, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);

  const progressBarRef = useRef(null);
  const volumeBarRef = useRef(null);

  // Default track info 
  const track = currentTrack || {
    id: 'default',
    name: "Blinding Lights",
    artists: [{ name: "The Weeknd" }],
    album: {
      name: "After Hours",
      images: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=60" }]
    },
    duration_ms: 201000
  };

  const duration = track.duration_ms / 1000; // Convert to seconds

  // Format time helper
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Update progress
  useEffect(() => {
    let interval;
    if (isPlaying && !isDraggingProgress) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          if (newTime >= duration) {
            setIsPlaying(false);
            if (onTrackEnd) onTrackEnd();
            return 0;
          }
          return newTime;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, isDraggingProgress, onTrackEnd]);

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  // Handle progress bar click
  const handleProgressClick = (e) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const newTime = (percentage / 100) * duration;
    setCurrentTime(newTime);
    setProgress(percentage);
  };

  // Handle progress bar drag
  const handleProgressMouseDown = (e) => {
    setIsDraggingProgress(true);
    handleProgressClick(e);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDraggingProgress) {
        handleProgressClick(e);
      }
      if (isDraggingVolume) {
        handleVolumeClick(e);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingProgress(false);
      setIsDraggingVolume(false);
    };

    if (isDraggingProgress || isDraggingVolume) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingProgress, isDraggingVolume]);

  // Handle volume bar click
  const handleVolumeClick = (e) => {
    if (!volumeBarRef.current) return;
    const rect = volumeBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setVolume(percentage);
    if (percentage > 0) setIsMuted(false);
  };

  const handleVolumeMouseDown = (e) => {
    setIsDraggingVolume(true);
    handleVolumeClick(e);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Toggle repeat mode
  const toggleRepeat = () => {
    setRepeatMode((prev) => (prev + 1) % 3);
  };

  // Handle skip
  const handleNext = () => {
    setCurrentTime(0);
    setProgress(0);
    if (onNext) onNext();
  };

  const handlePrevious = () => {
    if (currentTime > 3) {
      // If more than 3 seconds in, restart current song
      setCurrentTime(0);
      setProgress(0);
    } else {
      // Otherwise go to previous song
      setCurrentTime(0);
      setProgress(0);
      if (onPrevious) onPrevious();
    }
  };

  return (
    <div className="player">
      {/* Left: Current Track Info */}
      <div className="player-track-info">
        <img
          src={track.album.images[0]?.url}
          alt={track.album.name}
          className="player-album-art"
        />
        <div className="player-track-details">
          <div className="player-track-name" title={track.name}>
            {track.name}
          </div>
          <div className="player-track-artist" title={track.artists.map(a => a.name).join(', ')}>
            {track.artists.map(a => a.name).join(', ')}
          </div>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="player-like-btn"
          aria-label={isLiked ? "Remove from Liked Songs" : "Add to Liked Songs"}
        >
          <Heart 
            className={`player-icon ${isLiked ? 'liked' : ''}`}
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      {/* Center: Player Controls */}
      <div className="player-controls-center">
        {/* Control Buttons */}
        <div className="player-buttons">
          <button
            onClick={() => setIsShuffled(!isShuffled)}
            className={`player-control-btn ${isShuffled ? 'active' : ''}`}
            aria-label="Toggle Shuffle"
          >
            <Shuffle className="player-icon-small" />
          </button>
          
          <button 
            onClick={handlePrevious}
            className="player-control-btn"
            aria-label="Previous"
          >
            <SkipBack className="player-icon" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="player-play-btn"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="player-icon-play" fill="currentColor" />
            ) : (
              <Play className="player-icon-play" fill="currentColor" />
            )}
          </button>
          
          <button 
            onClick={handleNext}
            className="player-control-btn"
            aria-label="Next"
          >
            <SkipForward className="player-icon" />
          </button>
          
          <button
            onClick={toggleRepeat}
            className={`player-control-btn ${repeatMode > 0 ? 'active' : ''}`}
            aria-label="Toggle Repeat"
          >
            <Repeat className="player-icon-small" />
            {repeatMode === 2 && (
              <span className="repeat-one-indicator">1</span>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="player-progress-container">
          <span className="player-time">
            {formatTime(currentTime)}
          </span>
          <div
            ref={progressBarRef}
            onMouseDown={handleProgressMouseDown}
            className="player-progress-bar"
          >
            <div
              className="player-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="player-progress-handle"></div>
            </div>
          </div>
          <span className="player-time">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Right: Volume & Other Controls */}
      <div className="player-right-controls">
        <button className="player-control-btn player-extra-btn">
          <Mic2 className="player-icon-small" />
        </button>
        
        <button className="player-control-btn player-extra-btn">
          <Maximize2 className="player-icon-small" />
        </button>
        
        <button
          onClick={toggleMute}
          className="player-control-btn"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="player-icon" />
          ) : (
            <Volume2 className="player-icon" />
          )}
        </button>
        
        <div
          ref={volumeBarRef}
          onMouseDown={handleVolumeMouseDown}
          className="player-volume-bar"
        >
          <div
            className="player-volume-fill"
            style={{ width: `${isMuted ? 0 : volume}%` }}
          >
            <div className="player-volume-handle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;