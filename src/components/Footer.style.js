import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  max-width: 980px;
  height: ${(props) => props.theme.size.footerHeight};
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const Link = styled(UnstyledLink)`
  font-family: 'Montserrat';
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.midDark};
  text-decoration: none;
  cursor: pointer;
  flex: 1;

  &:last-of-type {
    text-align: right;
  }
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
`;
