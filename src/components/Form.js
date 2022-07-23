import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Form.style';

function Form() {
  const navigate = useNavigate();
  const { search } = useParams();
  const [userinput, setUserinput] = useState(search);

  useEffect(() => { setUserinput(search); }, [search]);

  const handleChange = (event) => {
    setUserinput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${userinput}`);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="input">
        r/
      </S.Label>
      <S.Input
        type="text"
        id="userinput"
        value={userinput}
        onChange={handleChange}
      />
      <S.Button type="submit">SEARCH</S.Button>
    </S.Form>
  );
}

export default Form;
