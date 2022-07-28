import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Heatmap.style';

import HeatmapRow from './HeatmapRow';
import HeatmapHeaderRow from './HeatmapHeaderRow';

function Heatmap({ postsPerDay, onClickCell, selectedDayAndHour }) {
  return (
    <>
      <S.Table>
        <HeatmapHeaderRow />
        <tbody>
          {postsPerDay.map((postsPerHour, day) => (
            <HeatmapRow
              // eslint-disable-next-line react/no-array-index-key
              key={day}
              day={day}
              postsPerHour={postsPerHour}
              onClickCell={onClickCell}
              selectedDayAndHour={selectedDayAndHour.day === day ? selectedDayAndHour.hour : null}
            />
          ))}
        </tbody>
      </S.Table>
      <S.Caption>
        All times are shown in your timezone:
        {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </S.Caption>
    </>
  );
}

Heatmap.propTypes = {
  postsPerDay: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onClickCell: PropTypes.func.isRequired,
  selectedDayAndHour: PropTypes.shape({
    day: PropTypes.number,
    hour: PropTypes.number,
  }).isRequired,
};

export default Heatmap;
