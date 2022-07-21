import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <Header />
        <Main />
        <Routes>
          <Route path="/search" element={<h1>Search</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
