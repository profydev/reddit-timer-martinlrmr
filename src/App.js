import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>

      <Routes>
        <Route exact path="/">
          App Placeholder
        </Route>

        <Route path="/search">
          test
        </Route>
      </Routes>

    </>
  );
}

export default App;
