import React from 'react';
import PropTypes from 'prop-types';
import * as S from './HeatmapRow.style';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function HeatmapRow({
  day,
  postsPerHour,
  selectedDayAndHour,
  onClickCell,
}) {
  return (
    <tr>
      <S.RowTitle>{weekdays[day]}</S.RowTitle>
      {postsPerHour.map((numPosts, hour) => (
        <S.DataCell
        // eslint-disable-next-line react/no-array-index-key
          key={hour}
          numPosts={numPosts}
          selected={hour === selectedDayAndHour}
          onClick={() => onClickCell({ day, hour })}
        >
          {numPosts}
        </S.DataCell>
      ))}
    </tr>
  );
}

HeatmapRow.propTypes = {
  day: PropTypes.number.isRequired,
  postsPerHour: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedDayAndHour: PropTypes.number,
  onClickCell: PropTypes.func,
};

HeatmapRow.defaultProps = {
  selectedDayAndHour: null,
  onClickCell: () => {},
};

export default HeatmapRow;
