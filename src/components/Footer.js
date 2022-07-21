import React from 'react';
import * as S from './Footer.style';
import logoFooter from '../img/logo-footer.svg';

function Footer() {
  return (
    <S.Footer>
      <S.A href="https://profy.dev/employers" target="_blank" rel="noreferrer">
        profy.dev
      </S.A>
      <S.Link to="/" aria-label="logo-footer">
        <S.Img src={logoFooter} />
      </S.Link>
      <S.Link to="/terms">
        Terms & Privacy
      </S.Link>
    </S.Footer>
  );
}

export default Footer;
