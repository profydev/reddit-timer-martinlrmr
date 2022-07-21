import React from 'react';
import * as S from './Footer.style';
import logoFooter from '../img/logo-footer.svg';

function Footer() {
  return (
    <S.Footer>
      <S.Img src={logoFooter} />
    </S.Footer>
  );
}

export default Footer;
