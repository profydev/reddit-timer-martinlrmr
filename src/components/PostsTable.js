import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PostsTable.style';
import PostsTableRow from './PostsTableRow';

function PostsTable({ ungroupedPosts, activeCell }) {
  const activePosts = ungroupedPosts.filter((post) => {
    const createdAt = new Date(post.data.created_utc * 1000);
    const dayOfWeek = createdAt.getDay();
    const hour = createdAt.getHours();

    return dayOfWeek === activeCell.day && hour === activeCell.hour;
  });

  const renderPostsTableRow = activePosts.sort((post) => post.data.created_utc).map((post) => (
    <PostsTableRow
      key={post.data.id}
      title={post.data.title}
      timePosted={new Date(post.data.created_utc * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
      score={post.data.score}
      commments={post.data.num_comments}
      author={post.data.author}
      permalink={post.data.permalink}
    />
  ));

  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Title</S.Th>
          <S.Th>Time Posted</S.Th>
          <S.Th>Score</S.Th>
          <S.Th>Comments</S.Th>
          <S.Th>Author</S.Th>
        </tr>
      </thead>
      <tbody>
        {renderPostsTableRow}
      </tbody>
      <S.Caption>Posts</S.Caption>
    </S.Table>
  );
}

PostsTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ungroupedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCell: PropTypes.shape({
    day: PropTypes.number,
    hour: PropTypes.number,
  }).isRequired,
};

export default PostsTable;
