import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './Form.style';

function Form({ subreddit }) {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/search/${inputText}`);
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
        placeholder={subreddit}
        onChange={handleChange}
      />
      <S.Button type="submit">SEARCH</S.Button>
    </S.Form>
  );
}

Form.propTypes = {
  subreddit: PropTypes.string,
};

Form.defaultProps = {
  subreddit: '',
};
export default Form;
