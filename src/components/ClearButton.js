import React from 'react';

const ClearButton = ({ onClickHandler }) => {
  return (
    <button type="button" className="btn" onClick={onClickHandler}>
      Clear All
    </button>
  );
};

export default ClearButton;
