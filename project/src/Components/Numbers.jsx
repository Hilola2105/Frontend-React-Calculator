import React from 'react';

import '../Styles/Numbers.css';

export default function Num({ children, onTap, className }) {
  return (
    <button className={`number ${className || ''}`} onClick={() => onTap(children)}>
      {children}
    </button>
  );
}
