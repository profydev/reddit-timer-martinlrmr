import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';
import * as S from './App.style';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  const subreddit = 'javascript';

  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <Header subreddit={subreddit} />
        <S.ContentContainer>
          <Routes>
            <Route path="/search" element={<h1>Search</h1>} />
            <Route path="/" element={<Homepage subreddit={subreddit} />} />
          </Routes>
        </S.ContentContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
