import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import * as S from './Heatmap.style';

function Heatmap() {
  const { subredditParameter } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subredditParameter);
  const [selectedCell, setSelectedCell] = useState('');

  const weekdays = [...Array(7).keys()];
  const hours = [...Array(24).keys()];

  const sortedRedditPosts = weekdays.reduce((dayAcc, weekday) => {
    const redditPostsOfThisDay = tempdata.filter(((redditPost) => redditPost.weekday === weekday));
    const redditPostsSeperatedByHour = hours.map((hour) => (
      redditPostsOfThisDay.filter((redditPost) => redditPost.hour === hour)
    ));
    return { ...dayAcc, [`day${weekday}`]: redditPostsSeperatedByHour };
  }, {});

  const handleClick = (e) => {
    setSelectedCell(e.currentTarget.id);
  };

  function renderCells(redditPostsOfThisDay) {
    const dayPosts = tempdata.filter((postsFromEveryDay) => (
      postsFromEveryDay.weekday === 0)).filter((postsFromEveryDay) => (
      postsFromEveryDay.hour === 10));
    console.log(dayPosts);

    return redditPostsOfThisDay.map((postsOfHour, index) => {
      if (postsOfHour.length > 0) {
        const { id, hour, weekday } = postsOfHour[0];
        return (
          <S.DataCell
            posts={postsOfHour.length}
            id={id}
            key={id}
            onClick={(e) => handleClick(e, weekday, hour)}
            hour={hour}
            weekday={weekday}
            border={id === selectedCell}
          >
            {postsOfHour.length}
          </S.DataCell>
        );
      }
      return (
      /* eslint-disable react/no-array-index-key */
        <S.DataCell
          posts="0"
          id={index}
          key={index}
          onClick={handleClick}
        >
          0
        </S.DataCell>
      /* eslint-enable react/no-array-index-key */
      );
    });
  }

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
      <S.Table>
        <S.TitlesRow>
          <S.ColTitles> </S.ColTitles>
          <S.ColTitles colSpan="2">12.00am</S.ColTitles>
          <S.ColTitles colSpan="2">2.00am</S.ColTitles>
          <S.ColTitles colSpan="2">4.00am</S.ColTitles>
          <S.ColTitles colSpan="2">6.00am</S.ColTitles>
          <S.ColTitles colSpan="2">8.00am</S.ColTitles>
          <S.ColTitles colSpan="2">10.00am</S.ColTitles>
          <S.ColTitles colSpan="2">12.00pm</S.ColTitles>
          <S.ColTitles colSpan="2">2.00pm</S.ColTitles>
          <S.ColTitles colSpan="2">4.00pm</S.ColTitles>
          <S.ColTitles colSpan="2">6.00pm</S.ColTitles>
          <S.ColTitles colSpan="2">8.00pm</S.ColTitles>
          <S.ColTitles colSpan="2">10.00pm</S.ColTitles>
        </S.TitlesRow>

        <tbody>
          <tr>
            <S.RowTitles>Sunday</S.RowTitles>
            {renderCells(sortedRedditPosts.day0)}
          </tr>
          <tr>
            <S.RowTitles>Monday</S.RowTitles>
            {renderCells(sortedRedditPosts.day1)}
          </tr>
          <tr>
            <S.RowTitles>Tuesday</S.RowTitles>
            {renderCells(sortedRedditPosts.day2)}
          </tr>
          <tr>
            <S.RowTitles>Wednesday</S.RowTitles>
            {renderCells(sortedRedditPosts.day3)}
          </tr>
          <tr>
            <S.RowTitles>Thursday</S.RowTitles>
            {renderCells(sortedRedditPosts.day4)}
          </tr>
          <tr>
            <S.RowTitles>Friday</S.RowTitles>
            {renderCells(sortedRedditPosts.day5)}
          </tr>
          <tr>
            <S.RowTitles>Saturday</S.RowTitles>
            {renderCells(sortedRedditPosts.day6)}
          </tr>
        </tbody>
      </S.Table>
  );
}

export default Heatmap;
