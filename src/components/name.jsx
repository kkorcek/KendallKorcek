import React, {useState, useEffect} from "react";
import '../styles/name.css';
import {motion, AnimatePresence} from 'framer-motion';


const slideInVariant = {
    hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 2 + i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: (i) => ({
    y: 50,
    opacity: 0,
    transition: {
      delay: i * 0.03, 
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};

const letterVariant = {
    hidden: (i) => ({
      y: i % 2 === 0 ? -280 : 280,
      rotate: i % 2 === 0 ? -450 : 450,
      opacity: 0,
    }),
    visible: (i) => ({
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut"
      },
    }),
  };

const SlidingText = ({ mainText, secondaryText }) => {
    const [showSecondary, setShowSecondary] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSecondary(false), 5000); // hide after 5 seconds
        return () => clearTimeout(timer);
      }, []);

    return (
      <div className="name-container" >
        <div className="name-title">
        {mainText.split("").map((char, i) => (
          <motion.span
            
            key={i}
            custom={i}
            variants={letterVariant}
            initial="hidden"
            animate="visible"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        </div>

        <AnimatePresence>
        {showSecondary && (
          <motion.div
            className="name-secondary"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {secondaryText.split("").map((char, i) => (
              <motion.span
                key={`sec-${i}`}
                custom={i}
                variants={slideInVariant}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        )}
        </AnimatePresence>
        
        

        
      </div>
    );
  };
    


export default SlidingText;