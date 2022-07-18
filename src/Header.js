import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li><Link to="#how-it-works">How It Works</Link></li>
        <li><Link to="#about">About</Link></li>
      </ul>
    </header>
  );
}

export default Header;
