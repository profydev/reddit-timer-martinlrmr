import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 0 15.3em 0 15.3em; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(UnstyledLink)`
  font-family: 'Montserrat';
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.midDark};
  text-decoration: none;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  position: relative;
  left: 1.6em; 
`;
