import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 32px 80px 32px 80px;
`;

export const LinkImg = styled(Link)`
    display: flex;
    margin-right: auto;
`;

export const LinkLi = styled(Link)`
  font-family: 'Montserrat';
  font-size: 1rem;
  color: #636363;
  text-decoration: none;
  cursor: pointer
`;

export const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

`;

export const Li = styled.li`
  color: red;
`;

export const Img = styled.img`
  width: 150px;
`;
