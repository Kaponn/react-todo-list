import React from 'react';

const ClearButton = ({ onClickHandler, name, buttonClassName }) => {
  return (
    <button type="button" className={buttonClassName} onClick={onClickHandler}>
      {name}
    </button>
  );
};

export default ClearButton;
