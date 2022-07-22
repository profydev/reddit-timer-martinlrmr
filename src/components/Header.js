import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import logo from '../img/logo.svg';

function Header() {
  return (
    <S.Header>
      <Link to="/" aria-label="logo-header">
        <S.Img src={logo} alt="" />
      </Link>
      <nav>
        <S.Ul>
          <li><S.Link to="/search/javascript">Search</S.Link></li>
          <li><S.HashLink smooth to="/#how-it-works">How it works</S.HashLink></li>
          <li><S.HashLink smooth to="/#about">About</S.HashLink></li>
        </S.Ul>
      </nav>
    </S.Header>
  );
}

export default Header;
