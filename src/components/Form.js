import React from 'react';
import * as S from './Form.style';

function Form() {
  return (
    <S.Form>
      <S.Label htmlFor="a">
        r/
      </S.Label>
      <S.Input type="text" id="a" />
      <S.Button>SEARCH</S.Button>
    </S.Form>
  );
}

export default Form;
