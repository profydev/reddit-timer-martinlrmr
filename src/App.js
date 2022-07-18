import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/search" element={<h1>Search</h1>} />
      </Routes>
    </>
  );
}

export default App;
