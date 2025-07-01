import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/navbar.css';
import linkedLight from '../assets/LinkedIn-light.png';
import linkedDark from '../assets/LinkedIn-dark.png';
import gitLight from '../assets/github-light.png';
import gitDark from '../assets/github-dark.png';
import downloadLight from '../assets/download-light.png';
import downloadDark from '../assets/download-dark.png';

const Navbar = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.hover-swap');

    icons.forEach((icon) => {
      const original = icon.getAttribute('src');
      const hoverSrc = icon.getAttribute('data-hover');

      icon.addEventListener('mouseenter', () => {
        icon.setAttribute('src', hoverSrc);
      });

      icon.addEventListener('mouseleave', () => {
        icon.setAttribute('src', original);
      });
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">KENDALL KORCEK</div> */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/projects">Projects</Link>
        </li> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="navbar-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/kendall-korcek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedLight}
              data-hover={linkedDark}
              alt="LinkedIn"
              className="nav-icon hover-swap"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kkorcek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitLight}
              data-hover={gitDark}
              alt="Github"
              className="nav-icon hover-swap"
            ></img>
          </a>
        </li>
        <li>
          <a href="/Kendall-Korcek-Resume.pdf" download>
            <img
              src={downloadLight}
              data-hover={downloadDark}
              alt="Download Resume"
              className="nav-icon hover-swap"
            ></img>
            <span className="hover-download">Download Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
