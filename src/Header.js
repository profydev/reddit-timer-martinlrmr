import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </header>
  );
}

export default Header;
