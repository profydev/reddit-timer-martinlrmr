import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import * as S from './Heatmap.style';

import TableRow from './TableRow';

function Heatmap() {
  const { subredditParameter } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subredditParameter);
  const [selectedCell, setSelectedCell] = useState('');

  const filteredPosts = (weekday) => {
    const daysPost = posts.filter((post) => post.weekday === weekday);
    const hours = [...Array(24).keys()];
    const sortedByHour = hours.map((hour) => daysPost.filter((post) => post.hour === hour));
    return sortedByHour;
  };

  const handleClick = (id) => {
    setSelectedCell(id);
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
    <>
      <S.Table>
        <S.TitlesRow>
          <tr>
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
          </tr>
        </S.TitlesRow>

        <tbody>
          <TableRow day="Sunday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
          <TableRow day="Monday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
          <TableRow day="Tuesday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
          <TableRow day="Wednesday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
          <TableRow day="Thursday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
          <TableRow day="Friday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
          <TableRow day="Saturday" filteredPosts={filteredPosts} handleClick={handleClick} selectedCell={selectedCell} />
        </tbody>
      </S.Table>
      <S.Caption>All times are shown in your timezone: Europe/Berlin</S.Caption>
    </>

  );
}

export default Heatmap;
