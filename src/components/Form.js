import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Form.style';

function Form({ changeSubreddit }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    </S.Form>
  );
}

Form.propTypes = {
  changeSubreddit: PropTypes.func,
};

Form.defaultProps = {
  changeSubreddit: () => {},
};

export default Form;
