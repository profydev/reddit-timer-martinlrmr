import React from 'react';
import * as S from './Footer.style';
import logoFooter from '../img/logo-footer.svg';

function Footer() {
  return (
    <S.Footer>
      <S.A href="https://profy.dev/employers" target="_blank" rel="noreferrer">
        profy.dev
      </S.A>
      <S.LinkImg to="/" aria-label="logo-footer">
        <S.Img src={logoFooter} />
      </S.LinkImg>
    </S.Footer>
  );
}

export default Footer;
