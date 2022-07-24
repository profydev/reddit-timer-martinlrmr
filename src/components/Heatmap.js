import * as React from 'react';
import * as S from './Heatmap.style';

function Heatmap() {
  return (
    <S.Table>
      <tr>
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
