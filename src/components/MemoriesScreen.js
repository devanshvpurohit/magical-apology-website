import React from 'react';
import { motion } from 'framer-motion';
import './MemoriesScreen.css';

const memories = [
  {
    date: 'A moment in time',
    title: 'One of my favorite memories.',
    note: "I didn't realize how precious this moment was until I started missing it.",
  },
  {
    date: 'Another time',
    title: 'When everything felt right.',
    note: "Some moments feel ordinary until they become memories you'd give anything to relive.",
  },
  {
    date: 'A special day',
    title: 'A moment worth remembering.',
    note: 'This is what I should have fought to preserve.',
  },
];

function MemoriesScreen({ onNext }) {
  return (
    <div className="screen memories-screen">
      <div className="screen-content">
        <h2 className="title">Moments I Treasure</h2>
        <p className="memories-subtitle">
          These memories remind me what I should have protected better.
        </p>

        <div className="memory-frames">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="memory-frame"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5 + 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="frame-glow" />
              <div className="memory-image placeholder-image">
                <span className="image-placeholder">📷</span>
                <p className="image-instruction">Replace with your photo</p>
              </div>
              <div className="memory-text">
                <p className="memory-date">{memory.date}</p>
                <p className="memory-description">{memory.title}</p>
                <p className="memory-note">{memory.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="magical-button"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue ✨
        </motion.button>
      </div>
    </div>
  );
}

export default MemoriesScreen;
