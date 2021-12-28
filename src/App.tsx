import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Charts from './Charts';

const Home: React.VFC = () => (
  <div className="graphs">
    <Charts />
  </div>
);

const App: React.VFC = () => (
  <div className="App">
    <div className="contents">
      <h1 className="title">Welcome to UBIC!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </div>
);

export default App;
