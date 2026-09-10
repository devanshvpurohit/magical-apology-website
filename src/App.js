import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import components
import OpeningScreen from './components/OpeningScreen';
import MistakeScreen from './components/MistakeScreen';
import ApologyScreen from './components/ApologyScreen';
import LetterScreen from './components/LetterScreen';
import AppreciationScreen from './components/AppreciationScreen';
import NoPressureScreen from './components/NoPressureScreen';
import FinalScreen from './components/FinalScreen';
import ClosingScreen from './components/ClosingScreen';
import MusicToggle from './components/MusicToggle';

const sections = [
  'opening',
  'mistake',
  'apology',
  'letter',
  'appreciation',
  'nopressure',
  'final',
  'closing'
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setDirection(1);
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setDirection(-1);
      setCurrentSection(currentSection - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        nextSection();
      } else if (e.key === 'ArrowLeft') {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Page transition variants
  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  const renderSection = () => {
    switch (sections[currentSection]) {
      case 'opening':
        return <OpeningScreen onNext={nextSection} />;
      case 'mistake':
        return <MistakeScreen onNext={nextSection} />;
      case 'apology':
        return <ApologyScreen onNext={nextSection} />;
      case 'letter':
        return <LetterScreen onNext={nextSection} />;
      case 'appreciation':
        return <AppreciationScreen onNext={nextSection} />;
      case 'nopressure':
        return <NoPressureScreen onNext={nextSection} />;
      case 'final':
        return <FinalScreen onNext={nextSection} />;
      case 'closing':
        return <ClosingScreen />;
      default:
        return <OpeningScreen onNext={nextSection} />;
    }
  };

  return (
    <div className="app">
      <MusicToggle />
      
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="section-container"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentSection ? 'active' : ''} ${
              index < currentSection ? 'completed' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
