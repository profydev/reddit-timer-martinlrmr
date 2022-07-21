import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  margin: 0 163px 0 163px;
  font-family: ${(props) => props.theme.font.family.default};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.color.text};
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.headline};
  font-weight: 400;
  font-size: 2.375rem;
  color: ${(props) => props.theme.color.dark};
  margin-top: 0.5em;
  margin-bottom: 0;
`;

export const Subtitle = styled.p`
  margin-top: 0.4em;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 9px;
  padding: 0.96em 1.07em 0.96em 1.07em;
  border-radius: 4px;
  color: ${(props) => props.theme.color.light};
  background-color: #FDB755;
  cursor: pointer;
  margin-top: 1.85em;
  border: none;
`;

export const SubredditTitle = styled.p`
  font-weight: 500;
  margin-top: 2.7em;
`;

export const TableImage = styled.img`
  width: 100%;
  margin-top: 1em;
`;
