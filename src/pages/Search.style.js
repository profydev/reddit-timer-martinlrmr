import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 163px 0 163px;
  font-family: ${(props) => props.theme.font.family.default};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.color.text};
  text-align: center;
  border: solid 1px red;
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.headline};
  font-weight: 400;
  font-size: 2.375rem;
  color: ${(props) => props.theme.color.dark};
  margin-top: 0.5em;
  margin-bottom: 0.45em;
`;
