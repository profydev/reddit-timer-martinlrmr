import styled from 'styled-components';

export const Form = styled.form`
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
  margin-right: 0.8em;
  margin-left: 0.8em;
  padding-left: 1.14em;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
`;

export const Button = styled.button`
  font-family: ${(props) => props.theme.font.family.default};
  font-weight: 500;
  font-size: 14px;
  height: 2.57em;
  padding-left: 1.14em;
  padding-right: 1.14em;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.color.light};
  background-color: #FDB755;

  &:hover, :focus {
    background-color: #FEA62E;
  }
`;
