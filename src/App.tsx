import React, { useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './Main';

const Home: React.VFC = () => {
  const id = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const submit = (): void => {
    fetch(`url/?id=${id.current?.value}&password=${password.current?.value}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <form action={`url/?id=${id.current?.value}&password=${id.current?.value}`}>
        Name:
        <input ref={id} type="text" name="id" />
        Password:
        <input ref={password} type="text" name="password" />
        <button type="button" value="Submit" onClick={submit}>
          submit
        </button>
      </form>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Main />
    </>
  );
};

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
