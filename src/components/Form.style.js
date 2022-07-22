import styled from 'styled-components';

export const Form = styled.form`
  border: solid 1px red;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 18px;
  color: ${(props) => props.theme.color.midDark};
`;

export const Input = styled.input`
  font-family: ${(props) => props.theme.font.family.default};
  font-size: 14px;
  color: ${(props) => props.theme.color.dark};
  max-width: 26.428em;
  width: 100%;
  height: 2.57em;
  margin-right: 0.64em;
  margin-left: 0.64em;
  padding-left: 1.14em;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
`;

export const Button = styled.input`
`;
