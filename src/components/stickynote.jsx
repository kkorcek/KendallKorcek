import React, { useEffect, useRef, useState } from 'react';
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
  altText = 'Sticky',
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [percentPos, setPercentPos] = useState({ top, left });

  const noteRef = useRef(null);
  const boardRef = useRef(null);

  // Convert percent to pixel position on mount & resize
  useEffect(() => {
    const updatePosition = () => {
      const board = boardRef.current || document.querySelector('.sticky-board');
      const note = noteRef.current;

      if (!board || !note) return;

      const boardRect = board.getBoundingClientRect();
      const noteRect = note.getBoundingClientRect();

      const maxX = boardRect.width - noteRect.width;
      const maxY = boardRect.height - noteRect.height;

      let x = boardRect.width * percentPos.left;
      let y = boardRect.height * percentPos.top;

      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      setPosition({ x, y });
    };

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      setWindowSize({ width: innerWidth, height: innerHeight });

      // Adjust vertical spacing if screen is narrow
      let adjustedTopPercent = percentPos.top;
      let adjustedLeftPercent = percentPos.left;

      if (innerWidth < 1200 && innerWidth >= 900) {
        // adjustedTopPercent = percentPos.top - 0.05;
        adjustedLeftPercent = percentPos.left - 0.05;
      } else if (innerWidth < 900 && innerWidth >= 600) {
        // adjustedTopPercent = percentPos.top - 0.1;
        adjustedLeftPercent = percentPos.left - 0.1;
      } else if (innerWidth < 600) {
        // adjustedTopPercent = percentPos.top - 0.15;
        adjustedLeftPercent = percentPos.left - 0.15;
      }

      const x = innerWidth * adjustedLeftPercent;
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
    const board = document.querySelector('.sticky-board');
    if (!board) return;
    const boardRect = board.getBoundingClientRect();

    const x = Math.max(
      0,
      Math.min(data.x, boardRect.width - noteRef.current.offsetWidth)
    );
    const y = Math.max(
      0,
      Math.min(data.y, boardRect.height - noteRef.current.offsetHeight)
    );

    setPosition({ x, y });

    const newLeftPercent = x / boardRect.width;
    const newTopPercent = y / boardRect.height;

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
        alt={altText}
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
        ref={noteRef}
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
