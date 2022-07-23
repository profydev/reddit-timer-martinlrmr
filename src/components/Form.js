import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Form.style';

function Form() {
  const navigate = useNavigate();
  const { subredditParameter } = useParams();
  const [subreddit, setSubreddit] = useState('');

  useEffect(() => {
    setSubreddit(subredditParameter);
  }, [subredditParameter]);

  const handleChange = (event) => {
    setSubreddit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${subreddit}`);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="input">
        r/
      </S.Label>
      <S.Input
        type="text"
        name="subreddit"
        value={subreddit}
        onChange={handleChange}
      />
      <S.Button type="submit">SEARCH</S.Button>
    </S.Form>
  );
}

export default Form;
