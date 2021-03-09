import React from 'react';
import Todos from './components/Todos';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <React.Fragment>
        <Todos />
      </React.Fragment>
    </div>
  );
}

export default App;
