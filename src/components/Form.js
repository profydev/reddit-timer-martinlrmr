import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './Form.style';

function Form({ changeSubreddit, subreddit }) {
  const [inputText, setInputText] = useState('javascript');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/search/${inputText}`);
    changeSubreddit(inputText);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="input">
        r/
      </S.Label>
      <S.Input
        type="text"
        id="input"
        value={inputText}
        onChange={handleChange}
      />
      <S.Button type="submit">SEARCH</S.Button>
      <p>{subreddit}</p>
    </S.Form>
  );
}

Form.propTypes = {
  subreddit: PropTypes.string,
  changeSubreddit: PropTypes.func,
};

Form.defaultProps = {
  subreddit: '',
  changeSubreddit: () => {},
};

export default Form;
