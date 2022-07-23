import React from 'react';
import PropTypes from 'prop-types';

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

function Homepage({ subreddit }) {
  return (
    <>
      <HeroSection subreddit={subreddit} />
      <InfoSection />
    </>
  );
}

Homepage.propTypes = {
  subreddit: PropTypes.string,
};

Homepage.defaultProps = {
  subreddit: '',
};

export default Homepage;
