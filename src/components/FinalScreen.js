import React from 'react';
import { motion } from 'framer-motion';
import FinalStarsScene from '../scenes/FinalStarsScene';
import './FinalScreen.css';

function FinalScreen({ onNext }) {
  return (
    <div className="screen final-screen">
      <FinalStarsScene />
      
      <div className="screen-content final-content">
        <motion.p
          className="final-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          If I could cast one spell…
        </motion.p>

        <motion.p
          className="final-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          It wouldn't be to erase what happened.
        </motion.p>

        <motion.p
          className="final-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          It would be to give me the chance to make things right.
        </motion.p>

        <motion.h1
          className="final-apology"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 7, duration: 1 }}
        >
          I'm sorry.
        </motion.h1>

        <motion.p
          className="final-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8.5, duration: 1 }}
        >
          For everything I should have said differently.
        </motion.p>

        <motion.p
          className="final-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 10, duration: 1 }}
        >
          For everything I should have understood sooner.
        </motion.p>

        <motion.p
          className="final-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 11.5, duration: 1 }}
        >
          And most of all…
        </motion.p>

        <motion.h2
          className="final-main-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 13, duration: 1 }}
        >
          I'm sorry for hurting someone who meant so much to me.
        </motion.h2>

        <motion.p
          className="final-wisdom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 15, duration: 1 }}
        >
          Some people are worth swallowing your pride for.
        </motion.p>

        <motion.p
          className="final-truth"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 16.5, duration: 1 }}
        >
          You are one of them.
        </motion.p>

        <motion.button
          className="magical-button glow-button"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 18, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close the letter 🕯️
        </motion.button>
      </div>
    </div>
  );
}

export default FinalScreen;
