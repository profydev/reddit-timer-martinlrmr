import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import logo from '../img/logo.svg';

function Header({ subreddit }) {
  return (
    <S.Header>
      <Link to="/" aria-label="logo-header">
        <S.Img src={logo} alt="" />
      </Link>
      <nav>
        <S.Ul>
          <li><S.Link to={`/search/${subreddit}`}>Search</S.Link></li>
          <li><S.Link to="/#how-it-works">How it works</S.Link></li>
          <li><S.Link to="/#about">About</S.Link></li>
        </S.Ul>
      </nav>
    </S.Header>
  );
}

export default Header;
