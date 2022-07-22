import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.style';
import Form from '../components/Form';

function Search({ changeSubreddit, subreddit }) {
  return (
    <S.Container>
      <S.H1>Find the best time for a subreddit</S.H1>
      <Form changeSubreddit={changeSubreddit} subreddit={subreddit} />
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
