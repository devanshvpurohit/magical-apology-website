import React from 'react';
import { motion } from 'framer-motion';
import CandlesScene from '../scenes/CandlesScene';
import './ApologyScreen.css';

function ApologyScreen({ onNext }) {
  return (
    <div className="screen apology-screen">
      <CandlesScene />
      
      <div className="screen-content great-hall-content">
        <motion.h1
          className="main-apology"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm Sorry.
        </motion.h1>

        <motion.p
          className="apology-qualifier"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Not because I want everything to go back to normal immediately.
        </motion.p>

        <motion.p
          className="apology-qualifier"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          Not because I want forgiveness without earning it.
        </motion.p>

        <motion.p
          className="apology-qualifier"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          But because you deserved better from me.
        </motion.p>

        <motion.button
          className="magical-button glow-button"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read what I couldn't say…
        </motion.button>
      </div>
    </div>
  );
}

export default ApologyScreen;
