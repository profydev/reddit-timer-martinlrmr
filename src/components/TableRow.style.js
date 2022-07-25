import styled from 'styled-components';

export const RowTitle = styled.td`
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
  outline: ${(props) => (
    props.border
    ? 'solid 1px black'
    : 'none'
  )};
  &:hover, :focus {
    background-color: #A0CE93;
    outline: solid 1px ${(props) => props.theme.color.dark};
    cursor: pointer;
  }
`;
