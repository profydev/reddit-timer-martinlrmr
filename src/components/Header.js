import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import logo from '../img/logo.svg';

function Header({ changeSubreddit }) {
  return (
    <S.Header>
      <Link to="/" aria-label="logo-header">
        <S.Img src={logo} alt="" />
      </Link>
      <nav>
        <S.Ul>
          <li><S.Link to="/search/javascript" onClick={() => changeSubreddit('javascript')} reloadDocument>Search</S.Link></li>
          <li><S.HashLink to="/#how-it-works">How it works</S.HashLink></li>
          <li><S.HashLink to="/#about">About</S.HashLink></li>
        </S.Ul>
      </nav>
    </S.Header>
  );
}

Header.propTypes = {
  changeSubreddit: PropTypes.func,
};

Header.defaultProps = {
  changeSubreddit: () => {},
};

export default Header;
