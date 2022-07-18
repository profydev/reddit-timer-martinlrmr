import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>

      <Routes>
        <GlobalStyles />
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Route
          exact
          path="/"
          element={
            <h1>test</h1>
          }
        />
        <Route path="/search" />
      </Routes>

    </>
  );
}

export default App;
