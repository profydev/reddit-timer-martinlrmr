import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';
import * as S from './App.style';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Search from './pages/Search';

function App() {
  const defaultSubreddit = 'javascript';

  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <Header defaultSubreddit={defaultSubreddit} />
        <S.ContentContainer>
          <Routes>
            <Route path="/search/:search" element={<Search key={new Date().getTime()} />} />
            <Route path="/" element={<Homepage defaultSubreddit={defaultSubreddit} />} />
          </Routes>
        </S.ContentContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
