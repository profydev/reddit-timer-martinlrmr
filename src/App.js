import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
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
