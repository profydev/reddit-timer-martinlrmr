import React from 'react';
// import { Link } from 'react-router-dom';
import * as S from './Header.style';
import logo from '../img/logo.svg';

function Header() {
  return (
    <S.Header>
      <S.LinkImg to="/" aria-label="logo-header">
        <S.Img src={logo} alt="" />
      </S.LinkImg>
      <nav>
        <S.Ul>
          <S.Li><S.Link to="/search/javascript">Search</S.Link></S.Li>
          <S.Li><S.Link to="/#how-it-works">How it works</S.Link></S.Li>
          <S.Li><S.Link to="/#about">About</S.Link></S.Li>
        </S.Ul>
      </nav>
    </S.Header>
  );
}

export default Header;
