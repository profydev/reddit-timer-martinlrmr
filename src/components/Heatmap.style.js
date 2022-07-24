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
    background-color: ${(props) => props.theme.color.light};
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

/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
export const DataCell = styled.td`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => (
    props.posts > 9
    ? '#3984a3'
    : props.posts > 8
    ? '#5aad8c'
    : props.posts > 7
    ? '#5cb391'
    : props.posts > 6
    ? '#5db492'
    : props.posts > 5
    ? '#5eb391'
    : props.posts > 4
    ? '#8cc894'
    : props.posts > 3
    ? '#99cd94'
    : props.posts > 2
    ? '#a0ce93'
    : props.posts > 1
    ? '#a9d194'
    : props.posts > 0
    ? '#aed396'
    : '#e0e592'
    )};
  /* eslint-enable no-nested-ternary */
  /* eslint-enable indent */
  &:hover, :focus {
    outline: solid 1px ${(props) => props.theme.color.dark};;
  }
`;
