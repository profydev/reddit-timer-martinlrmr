import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableRow.style';

function TableRow({
  day,
  filteredPosts,
  handleClick,
  selectedCell,
}) {
  const dataCells = filteredPosts(day).map((postsOfHour, index) => {
    if (postsOfHour.length > 0) {
      const { id, hour, weekday } = postsOfHour[0];
      return (
        <S.DataCell
          posts={postsOfHour.length}
          id={id}
          key={id}
          hour={hour}
          weekday={weekday}
          onClick={() => handleClick(id)}
          border={selectedCell === id}
        >
          {postsOfHour.length}
        </S.DataCell>
      );
    }
    return (
    /* eslint-disable react/no-array-index-key */
      <S.DataCell
        posts="0"
        id={`${day}${index}`}
        key={`${day}${index}`}
        onClick={() => handleClick(`${day}${index}`)}
        border={selectedCell === `${day}${index}`}
      >
        0
      </S.DataCell>
    /* eslint-enable react/no-array-index-key */
    );
  });

  return (
    <tr>
      <S.RowTitle>{day}</S.RowTitle>
      {dataCells}
    </tr>
  );
}

TableRow.propTypes = {
  day: PropTypes.string,
  selectedCell: PropTypes.string,
  filteredPosts: PropTypes.func,
  handleClick: PropTypes.func,
};

TableRow.defaultProps = {
  day: '',
  selectedCell: '',
  filteredPosts: () => {},
  handleClick: () => {},
};

export default TableRow;
