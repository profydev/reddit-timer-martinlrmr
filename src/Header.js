import React from 'react';
// import { Link } from 'react-router-dom';
import * as Styled from './Header.styled';
import logo from './img/logo.svg';

function Header() {
  return (
    <Styled.Header>
      <Styled.LinkImg to="/">
        <Styled.Img src={logo} alt="" />
      </Styled.LinkImg>
      <Styled.Ul>
        <Styled.Li><Styled.LinkLi to="/search/javascript">Search</Styled.LinkLi></Styled.Li>
        <Styled.Li><Styled.LinkLi to="#how-it-works">How It Works</Styled.LinkLi></Styled.Li>
        <Styled.Li><Styled.LinkLi to="#about">About</Styled.LinkLi></Styled.Li>
      </Styled.Ul>
    </Styled.Header>
  );
}

export default Header;
