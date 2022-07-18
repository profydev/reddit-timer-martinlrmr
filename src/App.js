import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          exact
          path="/"
          element={
            (
              <>
                <h1>test</h1>
              </>
            )
      } />
        <Route
          path="/search"
          element={
            (
              <>
                <h1>test 2</h1>
              </>
            )
      } />
      </Routes>
    </>
  );
}

export default App;
