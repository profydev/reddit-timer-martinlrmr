import styled, { keyframes } from 'styled-components';

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
  margin-right: 10px;
  margin-left: 10px;
  padding-left: 1.14em;
  // conditional styling for error/ no-input
  border: ${(props) => (props.errorStyling ? '1px solid #ff726f'
    : '1px solid #E6E6E6')};
  border-radius: 4px;
`;

export const Error = styled.p`
  color: #ff726f;
  font-size: 14px;
  margin-top: 0em;
  margin-right: 4.5em;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 0.375em solid rgba(0, 0, 0, 0);
  border-top: 0.375em solid #FEB756;
  border-radius: 50%;
  width: 4.4375em;
  height: 4.4375em;
  animation: ${spin} 1.5s linear infinite;
  margin: 0 auto;
  margin-top: 3.6em;
`;
