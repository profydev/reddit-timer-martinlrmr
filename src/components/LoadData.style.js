import styled, { keyframes } from 'styled-components';

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
`;

export const test = styled.a`
`;
