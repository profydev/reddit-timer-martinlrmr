import { Link as UnstyledLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: ${(props) => props.theme.size.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-left: 5em;
  margin-right: 5em;
`;

export const Link = styled(UnstyledLink)`
  font-size: 1rem;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.6em;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Img = styled.img`
  width: 9.375rem;
  display: inline-block;
`;
