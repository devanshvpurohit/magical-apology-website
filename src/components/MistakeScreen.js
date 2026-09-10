import React from 'react';
import { motion } from 'framer-motion';
import './MistakeScreen.css';

const lines = [
  "Sometimes pride makes us say things we shouldn't.",
  "Sometimes ego blinds us to what truly matters.",
  "Sometimes anger takes control when understanding should lead.",
  "Sometimes careless words wound the person who matters most.",
  "",
  "I'm not here to explain why I did it.",
  "I'm here to acknowledge that I did it.",
  "",
  "And that it was wrong."
];

function MistakeScreen({ onNext }) {
  return (
    <div className="screen mistake-screen">
      <div className="screen-content">
        <div className="parchment">
          <h2 className="parchment-title">Where I Went Wrong</h2>
          
          <div className="ink-writing">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className={`writing-line ${[5, 6].includes(index) ? 'emphasis' : ''}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.5 + 0.5, duration: 0.5 }}
              >
                {line || '\u00A0'}
              </motion.p>
            ))}
          </div>

          <motion.button
            className="magical-button"
            onClick={onNext}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: lines.length * 0.5 + 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue ✨
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default MistakeScreen;
