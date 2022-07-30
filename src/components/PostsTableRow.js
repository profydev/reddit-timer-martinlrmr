import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PostsTableRow.style';

function PostsTableRow({
  title,
  permalink,
  timePosted,
  score,
  commments,
  author,
}) {
  const shortenedTitle = (
    title.length > 44
      ? `${title.substring(0, 44)}...`
      : title
  );

  return (
    <tr>
      <S.Td><S.A href={`https://reddit.com/${permalink}`} target="_blank" rel="noreferrer">{shortenedTitle}</S.A></S.Td>
      <S.Td>{timePosted}</S.Td>
      <S.Td>{score}</S.Td>
      <S.Td>{commments}</S.Td>
      <S.Td>{author}</S.Td>
    </tr>
  );
}

PostsTableRow.propTypes = {
  title: PropTypes.string,
  permalink: PropTypes.string,
  timePosted: PropTypes.string,
  score: PropTypes.number,
  commments: PropTypes.number,
  author: PropTypes.string,
};

PostsTableRow.defaultProps = {
  title: '',
  permalink: '',
  timePosted: '',
  score: null,
  commments: null,
  author: '',
};

export default PostsTableRow;
