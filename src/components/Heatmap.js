import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import * as S from './Heatmap.style';

function Heatmap() {
  const { subredditParameter } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subredditParameter);

  if (isLoading) {
    return (
      <S.Spinner />
    );
  }

  if (hasError) {
    return (
      <S.Error>Something went wrong. Please check the subreddit you entered and try again.</S.Error>
    );
  }

  return (
    <div>
      {posts.length}
    </div>
  );
}

export default Heatmap;
