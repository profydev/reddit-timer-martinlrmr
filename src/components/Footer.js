import React from 'react';
import * as S from './Footer.style';
import logoFooter from '../img/logo-footer.svg';

function Footer() {
  return (
    <S.Footer>
      <S.Link to="/" aria-label="logo-footer">
        <S.Img src={logoFooter} />
      </S.Link>
    </S.Footer>
  );
}

export default Footer;
