import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PostsTableRow.style';

function PostsTableRow({
  title,
  timePosted,
  score,
  commments,
  author,
}) {
  return (
    <tr>
      <S.Td>{title}</S.Td>
      <S.Td>{timePosted}</S.Td>
      <S.Td>{score}</S.Td>
      <S.Td>{commments}</S.Td>
      <S.Td>{author}</S.Td>
    </tr>
  );
}

PostsTableRow.propTypes = {
  title: PropTypes.string,
  timePosted: PropTypes.string,
  score: PropTypes.number,
  commments: PropTypes.number,
  author: PropTypes.string,
};

PostsTableRow.defaultProps = {
  title: '',
  timePosted: '',
  score: null,
  commments: null,
  author: '',
};

export default PostsTableRow;
