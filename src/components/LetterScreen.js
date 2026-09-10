import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LetterScreen.css';

function LetterScreen({ onNext }) {
  const [recipientName, setRecipientName] = useState(
    localStorage.getItem('recipientName') || 'Gurupriya'
  );
  const [letterContent, setLetterContent] = useState(null);

  useEffect(() => {
    // Load letter content from JSON file
    fetch('/letter.json')
      .then(response => response.json())
      .then(data => setLetterContent(data))
      .catch(error => {
        console.error('Error loading letter:', error);
        // Fallback to default content if file not found
        setLetterContent({
          greeting: "Dear gurupriya ,",
          paragraphs: [
            "I've wirtten this letter a hundred times in my head, each time finding  ways to explain, to make sense of what happened. But now , I realized that's not what matters.",
            "What matters is this: **you were hurt.**",
            "Someone who was important to me—someone who *is* important to me—felt pain because of me.",
            "I should have being better at managing  things . I should have listened when you needed me to listen. I should have understood when understanding mattered most. I should have been the person you deserved, and I wasn't.",
            "I'm not writing this to ask you to forget As  I know Memory doesn't work like that , and pretending otherwise would be another mistake. I'm writing because you deserve to know that I see what I did, I understand why it hurt, and I am genuinely, deeply sorry.",
            "I don't know if apologies can mend what was broken. I don't know if time will soften what happened . But I do know this:"
          ],
          emphasis: [
            "Some spells can be undone. Some words cannot.",
            "So instead of trying to undo , I want to spend my time proving that I can do better."
          ],
          finalParagraphs: [
            "You were never just anyone to me. You were someone who made ordinary moments feel extraordinary. Someone whose presence I valued more than I ever properly expressed. Someone whose trust I should have guarded more carefully than I did.",
            "I'm sorry for the hurt. I'm sorry for the disappointment. And most of all, I'm sorry that I gave you reason to doubt what you meant to me."
          ],
          closing: "With sincere regret,",
          signature: "Someone who should have known better"
        });
      });
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.textContent;
    setRecipientName(newName);
    localStorage.setItem('recipientName', newName);
  };

  const formatText = (text) => {
    // Convert **text** to <strong> and *text* to <em>
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  if (!letterContent) {
    return (
      <div className="screen letter-screen">
        <div className="loading">Loading letter...</div>
      </div>
    );
  }

  return (
    <div className="screen letter-screen">
      <motion.div
        className="letter-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="wax-seal">✉</div>
        
        <div className="letter-paper">
          <div className="letter-header">
            <p className="letter-date">Tonight</p>
          </div>

          <div className="letter-body">
            <p className="letter-greeting">
              Dear{' '}
              <span
                className="recipient-name"
                contentEditable
                suppressContentEditableWarning
                onBlur={handleNameChange}
              >
                {recipientName}
              </span>
              ,
            </p>

            {letterContent.paragraphs.map((paragraph, index) => (
              <p key={`para-${index}`} dangerouslySetInnerHTML={{ __html: formatText(paragraph) }} />
            ))}

            {letterContent.emphasis.map((text, index) => (
              <p key={`emphasis-${index}`} className="letter-emphasis">{text}</p>
            ))}

            {letterContent.finalParagraphs.map((paragraph, index) => (
              <p key={`final-${index}`} dangerouslySetInnerHTML={{ __html: formatText(paragraph) }} />
            ))}

            <p className="letter-closing">{letterContent.closing}</p>
            <p className="letter-signature">{letterContent.signature}</p>
          </div>

          <motion.button
            className="magical-button"
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue ✨
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default LetterScreen;
