import React, { useState } from 'react';
import StickyNote from '../components/stickynote.jsx';
import '../styles/stickyboard.css';

const StickyBoard = ({ notes }) => {
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);

  return (
    <div className="sticky-board">
      {notes.map((note, index) => (
        <StickyNote
          key={index}
          text={note.text}
          rotation={note.rotation}
          top={note.top}
          left={note.left}
          background={note.background}
          backgroundImage={note.backgroundImage}
          isImage={note.isImage}
          isPolaroid={note.isPolaroid}
          link={note.link}
          largerSticky={note.largerSticky}
          onActivate={() => setActiveNoteIndex(index)}
          isActive={index === activeNoteIndex}
        />
      ))}
    </div>
  );
};

export default StickyBoard;
