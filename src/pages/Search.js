import React from 'react';
import * as S from './Search.style';

import Form from '../components/Form';

function Search() {
  return (
    <S.Container>
      <S.H1>Find the best time for a subreddit</S.H1>
      <Form />
    </S.Container>
  );
}

export default Search;
