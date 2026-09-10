import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConstellationScene from '../scenes/ConstellationScene';
import './AppreciationScreen.css';

const reasons = [
  'Because you understood me.',
  'Because you made ordinary days feel extraordinary.',
  'Because your presence mattered more than I ever said.',
  "Because you saw the best in me, even when I didn't.",
  'Because losing your trust made me realize how much I valued it.',
  'Because some people are irreplaceable.',
];

function AppreciationScreen({ onNext }) {
  const [selectedReason, setSelectedReason] = useState('');
  const [revealedStars, setRevealedStars] = useState([]);

  const handleStarClick = (index) => {
    if (!revealedStars.includes(index)) {
      setRevealedStars([...revealedStars, index]);
      setSelectedReason(reasons[index]);
    }
  };

  return (
    <div className="screen appreciation-screen">
      <ConstellationScene revealedStars={revealedStars} />
      
      <div className="screen-content">
        <h2 className="title">Why You Matter</h2>

        <div className="constellation-interactive">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`star-button ${revealedStars.includes(index) ? 'revealed' : ''}`}
              onClick={() => handleStarClick(index)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              style={{
                position: 'absolute',
                left: `${20 + (index % 3) * 30}%`,
                top: `${20 + Math.floor(index / 3) * 40}%`,
              }}
            >
              ⭐
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`reason-display ${selectedReason ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedReason ? 1 : 0 }}
        >
          {selectedReason}
        </motion.div>

        <motion.button
          className="magical-button"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue ✨
        </motion.button>
      </div>
    </div>
  );
}

export default AppreciationScreen;
