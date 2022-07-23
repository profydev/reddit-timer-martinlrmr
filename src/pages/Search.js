import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.style';
import Form from '../components/Form';

function Search({ userinput, handleChange }) {
  return (
    <S.Container>
      <S.H1>Find the best time for a subreddit</S.H1>
      <Form
        userinput={userinput}
        handleChange={handleChange}
      />
    </S.Container>
  );
}

Search.propTypes = {
  userinput: PropTypes.string,
  handleChange: PropTypes.func,
};

Search.defaultProps = {
  userinput: '',
  handleChange: () => {},
};

export default Search;
