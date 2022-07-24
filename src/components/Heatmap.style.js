import styled from 'styled-components';

export const Table = styled.table`
  max-width: 1114px;
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
`;

export const TitlesRow = styled.thead`
  height: 52px;
  background: linear-gradient(180deg, #FEFEFE 0%, #E9E9E9 100%);
  font-weight: 500;
  font-size: 14px;
  color: #787878;
  margin-bottom: 0;
  `;

export const ColTitles = styled.th`
  border-top: 1px solid #F3F3F3;

  &:first-of-type {
    background-color: ${(props) => props.theme.color.light};;
    border: none;
    border-right: 1px solid #F3F3F3;
  }
  &:last-of-type {
    border-right: 1px solid #F3F3F3;
  }
`;

export const RowTitles = styled.td`
  width: 154px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.color.light};
  background-color: #1E2537;
`;

export const DataCell = styled.td`
  background-color: green;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.color.light};

`;

export const A = styled.a`
`;
