import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  font-family: ${(props) => props.theme.font.family.default};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.color.text};
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.headline};
  font-weight: 400;
  font-size: 2.375;
  
  margin-bottom: 0;
`;

export const Subtitle = styled.p`
  margin-top: 1.25rem;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 9px;
  padding: 0.96em 1.07em 0.96em 1.07em;
  border-radius: 4px;
  color: ${(props) => props.theme.color.light};
  background-color: #FDB755;
`;

export const SubredditTitle = styled.p`
  font-weight: 500;
`;
