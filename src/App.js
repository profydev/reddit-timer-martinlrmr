import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './components/globalStyles';

function App() {
  return (
    <>
      <Routes>
        <Normalize />
        <GlobalStyles />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/search" element={<h1>Search</h1>} />
      </Routes>
    </>
  );
}

export default App;
