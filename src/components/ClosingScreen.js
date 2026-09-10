import React from 'react';
import { motion } from 'framer-motion';
import './ClosingScreen.css';

function ClosingScreen() {
  return (
    <div className="screen closing-screen">
      <div className="screen-content closing-content">
        <motion.p
          className="closing-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Whatever happens next…
        </motion.p>

        <motion.p
          className="closing-thanks"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Thank you for reading.
        </motion.p>

        <motion.div
          className="closing-symbol"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          ✨
        </motion.div>
      </div>
    </div>
  );
}

export default ClosingScreen;
