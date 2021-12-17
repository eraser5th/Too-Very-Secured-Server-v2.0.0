import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home: React.VFC = () => (
  <>
    <main>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
    <nav>
      <Link to="/about">About</Link>
    </nav>
  </>
);

const About: React.VFC = () => (
  <>
    <main>
      <h2>Who are we?</h2>
      <p>
        That feels like an existential question, don&lsquo;t you
        think?
      </p>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
);

const App: React.VFC = () => (
  <div className="App">
    <h1>Welcome to Too Very Secured WebSite!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
);

export default App;
