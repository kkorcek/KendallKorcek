import React from 'react';
import { useEffect } from 'react';

import '../styles/tab.css';

const Tab = ({ title, isActive, onClick, content }) => {
  if (!isActive) return null;

  return (
    <div className="tabcontent">
      <h3 className="head">{title}</h3>
      <br></br>
      {content}
    </div>
  );
};

export default Tab;
