import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import theme from './theme';
import Header from './Header';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/search" element={<h1>Search</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
