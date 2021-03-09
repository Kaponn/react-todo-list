import React from 'react';

const RemoveButton = ({ onClickHandler }) => {
  return (
    <button type="button" onClick={onClickHandler}>
      remove
    </button>
  );
};

export default RemoveButton;
