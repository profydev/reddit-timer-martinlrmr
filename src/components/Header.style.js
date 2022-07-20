import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 2em 5em 2em 5em;
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
  gap: 1.625em;
  margin: 0;
  padding: 0;
  list-style: none;

`;

export const Li = styled.li`
  color: red;
`;

export const Img = styled.img`
  width: 9.375rem;
`;
