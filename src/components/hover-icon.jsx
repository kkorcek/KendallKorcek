import React, { useState } from 'react';

import '../styles/hover-icon.css';

const HoverIcon = ({ darkSrc, lightSrc, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={hovered ? lightSrc : darkSrc}
      alt={alt}
      className="skill-icon hover-swap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default HoverIcon;
