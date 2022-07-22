import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.style';

import Form from '../components/Form';

function Search({ subreddit, changeSubreddit }) {
  return (
    <S.Container>
      <S.H1>Find the best time for a subreddit</S.H1>
      <Form subreddit={subreddit} changeSubreddit={changeSubreddit} />
    </S.Container>
  );
}

Search.propTypes = {
  subreddit: PropTypes.string,
  changeSubreddit: PropTypes.func,
};

Search.defaultProps = {
  subreddit: '',
  changeSubreddit: () => {},
};

export default Search;
