import React from 'react';
import { motion } from 'framer-motion';
import StarfieldScene from '../scenes/StarfieldScene';
import './OpeningScreen.css';

function OpeningScreen({ onNext }) {
  return (
    <div className="screen opening-screen">
      <StarfieldScene />
      
      <div className="screen-content">
        <motion.div className="parchment-glow">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Forgive me…
          </motion.h1>

          <motion.blockquote
            className="quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            "In fact, being — forgive me — rather cleverer than most men, my
            mistakes tend to be correspondingly huger."
          </motion.blockquote>

          <motion.p
            className="revelation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 1 }}
          >
            I may have made a mistake.
          </motion.p>

          <motion.p
            className="revelation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.5, duration: 1 }}
          >
            Actually… I know I did.
          </motion.p>

          <motion.p
            className="follow-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 8, duration: 1 }}
          >
            And sometimes, being right matters far less than saying sorry to the
            person who matters most.
          </motion.p>

          <motion.button
            className="magical-button"
            onClick={onNext}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 9.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter the story ✨
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default OpeningScreen;
