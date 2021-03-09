import React, { useState } from 'react';

const AddTodo = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    saveTodo(value);
    setValue('');
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          className="form"
          type="text"
          placeholder="Add todo..."
          value={value}
          onChange={onChangeHandler}
        ></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddTodo;
