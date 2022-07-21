import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 0 15.3em 0 15.3em; 
  display: flex;
  align-items: center;
  border: solid 1px red;
`;

export const Link = styled(UnstyledLink)`
  font-family: 'Montserrat';
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.midDark};
  text-decoration: none;
  cursor: pointer;
  flex: 1;
  border: solid 1px red;

  &:last-of-type {
    text-align: right;
  }
`;

export const Img = styled.img`
  display: block;
  border: solid 1px red;
  margin: 0 auto;
`;
