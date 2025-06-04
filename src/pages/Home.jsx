import React from 'react'
import { useEffect } from 'react';
import SlidingText from '../components/name';
// import '../styles/all-pages.css';
import '../styles/stack.css';
import '../styles/home.css';

// Icon Images
import cssDark from '../assets/css-logo-dark.png';
import cssLight from '../assets/css-logo-light.png';
import htmlDark from '../assets/html-logo-dark.png';
import htmlLight from '../assets/html-logo-light.png';
import jsDark from '../assets/js-logo-dark.png';
import jsLight from '../assets/js-logo-light.png';
import reactDark from '../assets/react-logo-dark.png';
import reactLight from '../assets/react-logo-light.png';
import cpDark from '../assets/c++-logo-dark.png';
import cpLight from '../assets/c++-logo-light.png';
import figmaDark from '../assets/figma-logo-dark.png';
import figmaLight from '../assets/figma-logo-light.png';
import sqlDark from '../assets/sql-logo-dark.png';
import sqlLight from '../assets/sql-logo-light.png';
import nodeDark from '../assets/node-logo-dark.png';
import nodeLight from '../assets/node-logo-light.png';

const Home = () => {
  useEffect(() => {
          const icons = document.querySelectorAll('.hover-swap');
        
          const handleMouseEnter = (e) => {
            const hoverSrc = e.currentTarget.getAttribute('data-hover');
            e.currentTarget.setAttribute('src', hoverSrc);
          };
        
          const handleMouseLeave = (e) => {
            const originalSrc = e.currentTarget.getAttribute('data-original');
            e.currentTarget.setAttribute('src', originalSrc);
          };
        
          icons.forEach((icon) => {
            icon.setAttribute('data-original', icon.getAttribute('src'));
            icon.addEventListener('mouseenter', handleMouseEnter);
            icon.addEventListener('mouseleave', handleMouseLeave);
          });
        
          return () => {
            icons.forEach((icon) => {
              icon.removeEventListener('mouseenter', handleMouseEnter);
              icon.removeEventListener('mouseleave', handleMouseLeave);
            });
          };
        }, []);
  return (
    <div class='container'>
      <div className="name-content">
            <h2 className="text-shadows">Kendall Korcek</h2>
      </div>
      
      <h3>Skills</h3>
          <div className="skills-grid">
            <img src={jsDark} data-hover={jsLight} alt='JS Logo' className='skill-icon hover-swap'></img>
            <img src={htmlDark} data-hover={htmlLight} alt='HTML Logo' className='skill-icon hover-swap'></img>
            <img src={cssDark} data-hover={cssLight} alt='CSS Logo' className='skill-icon hover-swap'></img>
            <img src={reactDark} data-hover={reactLight} alt='React Logo' className='skill-icon hover-swap'></img>
            <img src={cpDark} data-hover={cpLight} alt='C++ Logo' className='skill-icon hover-swap'></img>
            <img src={figmaDark} data-hover={figmaLight} alt='Figma Logo' className='skill-icon hover-swap'></img>
            <img src={sqlDark} data-hover={sqlLight} alt='SQL Logo' className='skill-icon hover-swap'></img>
            <img src={nodeDark} data-hover={nodeLight} alt='Node.js Logo' className='skill-icon hover-swap'></img>
          </div>
      
    </div>


    

      

  )   
};

export default Home;
