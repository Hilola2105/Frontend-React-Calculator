import React from 'react';

import '../Styles/CalcActions.css';

const CalcActions = ({ className, onTap, children, val, style }) => {
  function onClick(e) {
    e.preventDefault();
    onTap(val || e);
  }
  return (
    <button className={`action ${className || ''}`} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default CalcActions;
