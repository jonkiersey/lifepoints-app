import React from 'react';
import './App.css';
import LifePointForm from './components/LifePointForm';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Record a new LifePoint
        </p>
        <LifePointForm />
      </header>
    </div>
  );
}

export default App;
