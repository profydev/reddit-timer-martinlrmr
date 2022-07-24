import * as React from 'react';
import * as S from './Heatmap.style';

function Heatmap() {
  const array = (
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
  const renderCells = (input) => input.map((redditPost) => <S.DataCell>{redditPost}</S.DataCell>);

  return (
    <S.Table>
      <S.TitlesRow>
        <S.ColTitles> </S.ColTitles>
        <S.ColTitles colSpan="2">12.00am</S.ColTitles>
        <S.ColTitles colSpan="2">2.00am</S.ColTitles>
        <S.ColTitles colSpan="2">4.00am</S.ColTitles>
        <S.ColTitles colSpan="2">6.00am</S.ColTitles>
        <S.ColTitles colSpan="2">8.00am</S.ColTitles>
        <S.ColTitles colSpan="2">10.00am</S.ColTitles>
        <S.ColTitles colSpan="2">12.00pm</S.ColTitles>
        <S.ColTitles colSpan="2">2.00pm</S.ColTitles>
        <S.ColTitles colSpan="2">4.00pm</S.ColTitles>
        <S.ColTitles colSpan="2">6.00pm</S.ColTitles>
        <S.ColTitles colSpan="2">8.00pm</S.ColTitles>
        <S.ColTitles colSpan="2">10.00pm</S.ColTitles>
      </S.TitlesRow>

      <tbody>
        <tr>
          <S.RowTitles>Sunday</S.RowTitles>
          {renderCells(array)}
        </tr>
        <tr>
          <S.RowTitles>Monday</S.RowTitles>
          {renderCells(array)}
        </tr>
        <tr>
          <S.RowTitles>Tuesday</S.RowTitles>
          {renderCells(array)}
        </tr>
        <tr>
          <S.RowTitles>Wednesday</S.RowTitles>
          {renderCells(array)}
        </tr>
        <tr>
          <S.RowTitles>Thursday</S.RowTitles>
          {renderCells(array)}
        </tr>
        <tr>
          <S.RowTitles>Friday</S.RowTitles>
          {renderCells(array)}
        </tr>
        <tr>
          <S.RowTitles>Saturday</S.RowTitles>
          {renderCells(array)}
        </tr>
      </tbody>
    </S.Table>
  );
}

export default Heatmap;
