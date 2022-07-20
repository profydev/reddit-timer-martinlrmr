import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';
import Header from './components/Header';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route path="/search" element={<h1>Search</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
