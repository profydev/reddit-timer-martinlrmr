import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import * as S from './HeatmapSection.style';

function HeatmapSection() {
  const { subredditParameter } = useParams();
  const { isLoading, hasError, postsPerDay } = useFetchPosts(subredditParameter);
  const [activeCell, setActiveCell] = useState({ day: null, hour: null });

  const setActiveDayAndHour = (dayAndHourOfCell) => {
    setActiveCell(dayAndHourOfCell);
  };

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
    </S.HeatmapContainer>

  );
}

export default HeatmapSection;
