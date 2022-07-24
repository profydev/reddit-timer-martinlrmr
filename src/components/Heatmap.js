import React from 'react';
import * as S from './Heatmap.style';
import tempdata from './tempdata';

function Heatmap() {
  const weekdays = [...Array(7).keys()];
  const hours = [...Array(24).keys()];

  const sortedRedditPosts = weekdays.reduce((dayAcc, weekday) => {
    const redditPostsOfThisDay = tempdata.filter(((redditPost) => redditPost.weekday === weekday));
    const redditPostsSeperatedByHour = hours.map((hour) => (
      redditPostsOfThisDay.filter((redditPost) => redditPost.hour === hour)
    ));

    return { ...dayAcc, [`day${weekday}`]: redditPostsSeperatedByHour };
  }, {});

  console.log(sortedRedditPosts);

  function renderCells(redditPostsOfThisDay) {
    return redditPostsOfThisDay.map((hour) => {
      if (hour.length > 0) {
        return <S.DataCell>{hour.length}</S.DataCell>;
      }
      return <S.DataCell>0</S.DataCell>;
    });
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
