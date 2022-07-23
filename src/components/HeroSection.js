import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './HeroSection.style';
import table from '../img/table.png';

function HeroSection({ subreddit }) {
  return (
    <>
      <S.Section>
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
      </S.Section>
    </>
  );
}

HeroSection.propTypes = {
  subreddit: PropTypes.string,
};

HeroSection.defaultProps = {
  subreddit: '',
};

export default HeroSection;
