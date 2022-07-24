import * as React from 'react';
import * as S from './Heatmap.style';

function Heatmap() {
  return (
    <S.Table>
      <tr>
        <thead>
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
        </thead>

        <tbody>
          <tr>
            <S.RowTitles>Monday</S.RowTitles>
          </tr>
          <tr>
            <S.RowTitles>Tuesday</S.RowTitles>
          </tr>
          <tr>
            <S.RowTitles>Wednesday</S.RowTitles>
          </tr>
          <tr>
            <S.RowTitles>Thursday</S.RowTitles>
          </tr>
          <tr>
            <S.RowTitles>Friday</S.RowTitles>
          </tr>
        </tbody>
      </tr>
    </S.Table>
  );
}

export default Heatmap;
