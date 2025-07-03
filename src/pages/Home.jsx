import React from 'react';
import { useEffect } from 'react';

import '../styles/stack.css';
import '../styles/home.css';

import TabGrid from '../components/tabgrid.jsx';

import StickyBoard from '../components/stickyboard';

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

// Main Board
import flowerPolaroid from '../assets/flower-polaroid.png';
import brayPolaroid from '../assets/bray-polaroid.png';
import waterPolaroid from '../assets/water-polaroid.png';

import starSticky from '../assets/star-sticky.png';
import crumpleSticky from '../assets/crumple-sticky.png';
import sealSticky from '../assets/seal-sticky.png';
import ticketSticky from '../assets/ticket-sticky.png';
import postCardSticky from '../assets/post-card-sticky.jpeg';

const Home = () => {
  const stickyNotes = [
    {
      text: '',
      rotation: -5,
      top: 0.1,
      left: 0.05,
      backgroundImage: flowerPolaroid,
      isImage: false,
      isPolaroid: true,
      altText: 'Flower Polaroid Image',
    },
    {
      text: '',
      rotation: 30,
      top: 0.05,
      left: 0.45,
      backgroundImage: starSticky,
      isImage: true,
      altText: 'Green Star Image',
    },

    {
      text: '',
      rotation: 10,
      top: 0.7,
      left: 0.6,
      backgroundImage: ticketSticky,
      link: '/Contact',
      isImage: true,
      altText: 'Ticket Image with Link to Contact Page',
    },
    {
      text: '',
      rotation: 15,
      top: 0.4,
      left: 0.4,
      backgroundImage: waterPolaroid,
      isImage: false,
      isPolaroid: true,
      altText: 'Water Polaroid Image',
    },
    {
      text: '',
      rotation: 5,
      top: 0.15,
      left: 0.6,
      backgroundImage: postCardSticky,
      largerSticky: true,
      isImage: true,
      altText:
        "Post Card Sticky Image: I'm passionate about web development and building intuitive, user-centered experiences. I enjoy digging into data to uncover insights that guide better design and functionality, and I thrive when working across the full stack to bring ideas to life from end to end.",
    },
    {
      text: '',
      rotation: -30,
      top: 0.35,
      left: 0.8,
      backgroundImage: sealSticky,
      isImage: true,
      altText: 'Blue Rose Wax Seal Image',
    },
    {
      text: '',
      rotation: -15,
      top: 0.02,
      left: 0.2,
      backgroundImage: crumpleSticky,
      largerSticky: false,
      isImage: true,
      altText: 'Crumpled Sticky Note Image: Move Me!',
    },
    {
      text: '',
      rotation: -5,
      top: 0.35,
      left: 0.18,
      backgroundImage: brayPolaroid,
      isImage: false,
      isPolaroid: true,
      altText: 'Bray Ireland Polaroid Image',
    },
  ];

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
    <div className="container">
      <div className="name-content">
        <h2 className="text-shadows">Kendall Korcek</h2>
      </div>
      {/* <div className='text-block'>
      </div>  */}
      <StickyBoard notes={stickyNotes} />
    </div>
  );
};

export default Home;
