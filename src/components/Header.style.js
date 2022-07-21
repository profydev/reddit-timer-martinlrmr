import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  ${(props) => props.theme.size.headerHeight};
  padding: 1.725em 4.5em 2em 4.7em;
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
  height: 100%;
  gap: 1.35em;
  margin: 0;
  padding: 0;
  list-style: none;

`;

export const Li = styled.li`
  color: red;
`;

export const Img = styled.img`
  width: 9.375rem;
  display: block;
`;
