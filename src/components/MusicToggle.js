import React, { useState, useRef, useEffect } from 'react';
import './MusicToggle.css';

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleMusic = () => {
    if (!isPlaying) {
      startAmbientMusic();
    } else {
      stopAmbientMusic();
    }
    setIsPlaying(!isPlaying);
  };

  const startAmbientMusic = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
      
      oscillatorRef.current = audioContextRef.current.createOscillator();
      gainNodeRef.current = audioContextRef.current.createGain();
      
      oscillatorRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.connect(audioContextRef.current.destination);
      
      oscillatorRef.current.type = 'sine';
      oscillatorRef.current.frequency.value = 220;
      gainNodeRef.current.gain.value = 0.02;
      
      oscillatorRef.current.start();
      
      // Subtle frequency modulation
      const modulate = () => {
        if (oscillatorRef.current && isPlaying) {
          const newFreq = 220 + Math.sin(Date.now() / 1000) * 20;
          oscillatorRef.current.frequency.setValueAtTime(
            newFreq,
            audioContextRef.current.currentTime
          );
          requestAnimationFrame(modulate);
        }
      };
      modulate();
    } catch (error) {
      console.log('Audio not available:', error);
    }
  };

  const stopAmbientMusic = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientMusic();
    };
  }, []);

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
