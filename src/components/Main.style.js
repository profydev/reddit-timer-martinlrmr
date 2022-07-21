import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  font-family: ${(props) => props.theme.font.family.default};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  text-align: center;
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.headline};
  font-weight: 400;
  font-size: 2.375;
  margin-bottom: 0;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.color.midDark};
  margin-top: 1.25rem;
`;
