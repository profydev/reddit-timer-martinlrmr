import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './Form.style';
import Button from './Button';

function FormC() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const { subredditParameter } = useParams();
  const [subreddit, setSubreddit] = useState('');
  const [noResults, setNoResult] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [topRedditPosts, setTopRedditPosts] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    const baseUrl = `https://www.reddit.com/r/${subredditParameter}/top.json?t=year&limit=100`;
    let accumulator = [];

    setNoResult(false);
    setTopRedditPosts('');
    setLoading(true);
    setSubreddit(subredditParameter);

    function fetchTopRedditPosts(url) {
      fetch(url)
        .then((response) => response.json())
        .then((redditResponse) => {
          console.log(redditResponse);

          accumulator = accumulator.concat(redditResponse.data.children.map((redditPost) => (
            {
              id: redditPost.data.id,
              title: redditPost.data.title,
              permalink: redditPost.data.permalink,
              created: redditPost.data.created,
              score: redditPost.data.score,
              num_comments: redditPost.data.num_comments,
              author: redditPost.data.author,
              weekday: new Date(redditPost.data.created * 1000).getDay(),
              hour: new Date(redditPost.data.created * 1000).getHours(),
              time: new Date(redditPost.data.created * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase(),
            }
          )));

          console.log(accumulator);

          if (accumulator.length < 500) {
            const nextUrlQuery = `${baseUrl}&after=${redditResponse.data.after}`;
            fetchTopRedditPosts(nextUrlQuery);
          } else {
            setTopRedditPosts(accumulator);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err) {
            setNoResult(true);
            setLoading(false);
          }
        });
    }
    fetchTopRedditPosts(baseUrl);
  }, [subredditParameter]);

  const handleChange = (event) => {
    setSubreddit(event.target.value);
  };

  const onSubmit = () => {
    navigate(`/search/${subreddit}`);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label htmlFor="input">r/</S.Label>
      <S.Input
        type="text"
        name="subreddit"
        value={subreddit}
        onChange={handleChange}
        errorStyling={errors.subreddit || noResults}
        /* eslint-disable react/jsx-props-no-spreading */
        {...register('subreddit', {
          required: true,
          onChange: (e) => handleChange(e),
        })}
      />
      <Button type="submit">SEARCH</Button>
      {isLoading && <S.Spinner />}
      {noResults && <S.Error>No subreddits with that name try another</S.Error>}
    </S.Form>
  );
}
export default FormC;

=======
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import * as S from './Heatmap.style';

function Heatmap() {
  const { subredditParameter } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subredditParameter);

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
    <div>
      {posts.length}
    </div>
>>>>>>> main
  );
}





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