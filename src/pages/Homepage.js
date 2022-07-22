import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './Homepage.style';
import table from '../img/table.png';

function Homepage({ subreddit }) {
  return (
    <S.Main>
      <S.H1>No reactions to your reddit posts?</S.H1>
      <S.Subtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.Subtitle>
      <Link to={`/search/${subreddit}`}>
        <S.Button>SHOW ME THE BEST TIME</S.Button>
      </Link>
      <S.SubredditTitle>{`r${subreddit}`}</S.SubredditTitle>
      <Link to={`/search/${subreddit}`}>
        <S.TableImage src={table} alt="" />
      </Link>
      <S.Section>
        <S.H2 id="how-it-works">How it works</S.H2>
        <S.Ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
          <li>See immediately when to submit your reddit post.</li>
        </S.Ul>
      </S.Section>
      <S.Section>
        <S.H2 id="about">About</S.H2>
        <S.P>
          This app was created during a course on
          <S.SectionA href="https://profy.dev" target="_blank" rel="noreferrer"> profy.dev </S.SectionA>
          with the goal to implement a pixel-perfect real-world application with professional
          workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
          <S.SectionA href="https://profy.dev/employers" target="_blank" rel="noreferrer">Click here for more information.</S.SectionA>
        </S.P>
      </S.Section>
    </S.Main>
  );
}

Homepage.propTypes = {
  subreddit: PropTypes.string,
};

Homepage.defaultProps = {
  subreddit: '',
};

export default Homepage;
