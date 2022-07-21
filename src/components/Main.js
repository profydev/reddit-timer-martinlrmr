import React from 'react';
import * as S from './Main.style';
import table from '../img/table.png';

function Hero() {
  return (
    <S.Main>
      <S.H1>No reactions to your reddit posts?</S.H1>
      <S.Subtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.Subtitle>
      <S.Button>
        SHOW ME THE BEST TIME
      </S.Button>
      <S.SubredditTitle>r/javascript</S.SubredditTitle>
      <S.TableImage src={table} alt="" />
    </S.Main>
  );
}

export default Hero;
