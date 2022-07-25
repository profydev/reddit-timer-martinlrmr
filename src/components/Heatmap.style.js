import styled, { keyframes } from 'styled-components';

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

export const Table = styled.table`
  max-width: 1114px;
  width: 100%;
  table-layout: fixed;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
`;

export const TitlesRow = styled.thead`
  height: 52px;
  background: linear-gradient(180deg, #FEFEFE 0%, #E9E9E9 100%);
  font-weight: 500;
  font-size: 14px;
  color: #787878;
  margin-bottom: 0;
`;

export const ColTitles = styled.th`
  border-top: 1px solid #F3F3F3;
  &:first-of-type {
    width: 14.1%;
    background-color: ${(props) => props.theme.color.light};
    border: none;
    border-right: 1px solid #F3F3F3;
  }
  &:last-of-type {
    border-right: 1px solid #F3F3F3;
  }
`;

export const Caption = styled.p`
  margin-top: 0.75em;
  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.text};
`;
