import React from 'react';

const ToggleCompleted = ({ onToggle }) => {
  return <input type="checkbox" onChange={onToggle} />;
};

export default ToggleCompleted;
