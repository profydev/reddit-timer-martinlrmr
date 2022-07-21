import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Homepage.style';
import table from '../img/table.png';

function Homepage() {
  return (
    <S.Main>
      <S.H1>No reactions to your reddit posts?</S.H1>
      <S.Subtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.Subtitle>
      <Link to="/search/javascript">
        <S.Button>SHOW ME THE BEST TIME</S.Button>
      </Link>
      <S.SubredditTitle>r/javascript</S.SubredditTitle>
      <Link to="/search/javascript">
        <S.TableImage src={table} alt="" />
      </Link>
    </S.Main>
  );
}

export default Homepage;
