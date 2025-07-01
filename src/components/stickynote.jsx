import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import '../styles/stickynote.css';

const StickyNote = ({
  text,
  rotation = 0,
  top, // percent (0–1)
  left,
  background,
  backgroundImage,
  isImage = false,
  isPolaroid = false,
  largerSticky = false,
  link,
  onActivate,
  isActive = false,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [percentPos, setPercentPos] = useState({ top, left });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Convert percent to pixel position on mount & resize
  useEffect(() => {
    const updatePosition = () => {
      const x = window.innerWidth * percentPos.left;
      const y = window.innerHeight * percentPos.top;
      setPosition({ x, y });
    };

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      setWindowSize({ width: innerWidth, height: innerHeight });

      // Adjust vertical spacing if screen is narrow
      let adjustedTopPercent = percentPos.top;
      let adjustedLeftPercent = percentPos.left;

      if (innerWidth < 1200 && innerWidth >= 900) {
        adjustedTopPercent = percentPos.top - 0.05;
        adjustedLeftPercent = percentPos.left - 0.05;
      } else if (innerWidth < 900 && innerWidth >= 600) {
        adjustedTopPercent = percentPos.top - 0.1;
        adjustedLeftPercent = percentPos.left - 0.1;
      } else if (innerWidth < 600) {
        adjustedTopPercent = percentPos.top - 0.15;
        adjustedLeftPercent = percentPos.left - 0.15;
      }

      const x = innerWidth * percentPos.left;
      const y = innerHeight * adjustedTopPercent;

      setPosition({ x, y });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('resize', handleResize);
    };
  }, [percentPos]);

  // Convert drag movement to percent-based position
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });

    const newLeftPercent = data.x / window.innerWidth;
    const newTopPercent = data.y / window.innerHeight;
    setPercentPos({ top: newTopPercent, left: newLeftPercent });
  };

  // Determine image class
  const imageClass = isPolaroid
    ? 'polaroid-note'
    : largerSticky
    ? 'sticky-image-large'
    : 'sticky-image-small';

  // Render image wrapped in link (internal or external)
  const renderLinkedImage = () => {
    const imgElement = (
      <img
        src={backgroundImage}
        alt="Sticky Note"
        className={imageClass}
        draggable={false}
      />
    );

    if (!link) return imgElement;
    return link.startsWith('http') ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {imgElement}
      </a>
    ) : (
      <Link to={link}>{imgElement}</Link>
    );
  };

  // Render text wrapped in link (internal or external)
  const renderLinkedText = () => {
    if (!link) return <div className="sticky-text">{text}</div>;
    return link.startsWith('http') ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-text-link"
      >
        {text}
      </a>
    ) : (
      <Link to={link} className="sticky-text-link">
        {text}
      </Link>
    );
  };

  return (
    <Draggable
      bounds="parent"
      position={position}
      onDrag={handleDrag}
      onStart={onActivate}
    >
      <div
        className={`sticky-note ${isPolaroid || isImage ? 'image-note' : ''}`}
        style={{
          position: 'absolute',
          zIndex: isActive ? 999 : 1,
          background: isImage ? 'none' : background,
        }}
      >
        <div
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center',
          }}
        >
          {isPolaroid || isImage ? renderLinkedImage() : renderLinkedText()}
        </div>
      </div>
    </Draggable>
  );
};

export default StickyNote;
