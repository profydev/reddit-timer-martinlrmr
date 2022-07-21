import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: ${(props) => props.theme.size.headerHeight};
  padding: 0 5em 0 5em;
  display: flex;
  align-items: center;
`;

export const LinkImg = styled(UnstyledLink)`
  margin-right: auto;
`;

export const Link = styled(UnstyledLink)`
  font-family: 'Montserrat';
  font-size: 1rem;
  color: ${(props) => props.theme.color.midDark};
  text-decoration: none;
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6em;
  list-style: none;
`;

export const Img = styled.img`
  width: 9.375rem;
  display: block;
`;
