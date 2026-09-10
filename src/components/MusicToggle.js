import React, { useState, useRef, useEffect } from 'react';
import './MusicToggle.css';

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set volume to 30%
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (!isPlaying) {
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className={`music-toggle ${isPlaying ? 'playing' : 'muted'}`}
      onClick={toggleMusic}
      aria-label="Toggle Music"
    >
      <span className="music-icon">{isPlaying ? '🎵' : '🔇'}</span>
    </button>
  );
}

export default MusicToggle;
