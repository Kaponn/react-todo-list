import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ClearButton from './ClearButton';
import RemoveButton from './RemoveButton';
import ToggleCompleted from './ToggleCompleted';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const clearTodos = () => setTodos([]);

  const removeTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const saveTodoHandler = (text) => {
    const trimmedText = text.trim();

    if (trimmedText.length > 0) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          name: text,
          completed: false,
        },
      ]);
    }
  };

  return (
    <React.Fragment>
      <AddTodo saveTodo={saveTodoHandler} />
      {todos.map((todo) => {
        const { id, name, completed } = todo;
        return (
          <div key={id} className="item">
            <ToggleCompleted onToggle={() => toggleTodo(id)} />
            <h4 style={{ textDecoration: completed ? 'line-through' : 'none' }}>
              {name}
            </h4>
            <RemoveButton onClickHandler={() => removeTodo(id)} />
          </div>
        );
      })}
      <ClearButton onClickHandler={clearTodos} />
    </React.Fragment>
  );
};

export default Todos;