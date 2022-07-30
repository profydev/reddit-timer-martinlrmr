import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import PostsTable from './PostsTable';
import * as S from './HeatmapSection.style';

function HeatmapSection() {
  const { subredditParameter } = useParams();
  const {
    isLoading,
    hasError,
    ungroupedPosts,
    postsPerDay,
  } = useFetchPosts(subredditParameter);
  const [activeCell, setActiveCell] = useState({ day: null, hour: null, numPosts: null });

  const setActiveDayAndHour = (dayAndHourOfCell) => {
    setActiveCell(dayAndHourOfCell);
  };

  const conditionallyShowPostsTable = (
    (activeCell.day !== null && activeCell.numPosts)
      ? <PostsTable ungroupedPosts={ungroupedPosts} activeCell={activeCell} />
      : null
  );

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
    <S.HeatmapContainer>
      <Heatmap
        postsPerDay={postsPerDay}
        activeCell={activeCell}
        setActiveDayAndHour={setActiveDayAndHour}
      />
      {conditionallyShowPostsTable}
    </S.HeatmapContainer>

  );
}

export default HeatmapSection;
