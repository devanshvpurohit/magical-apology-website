import React from 'react';
import { motion } from 'framer-motion';
import './NoPressureScreen.css';

const lines = [
  "I don't expect an answer.",
  "I don't expect everything to magically become okay.",
  'I only wanted you to know that I am truly sorry.',
  'Whatever you decide, I respect it.',
];

function NoPressureScreen({ onNext }) {
  return (
    <div className="screen nopressure-screen">
      <div className="screen-content sincere-message">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className="sincere-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 1.5 + 0.5, duration: 1 }}
          >
            {line}
          </motion.p>
        ))}

        <motion.button
          className="magical-button"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue ✨
        </motion.button>
      </div>
    </div>
  );
}

export default NoPressureScreen;
