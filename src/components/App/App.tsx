import React from 'react';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';

//here will be all routes

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
