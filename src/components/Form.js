import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './Form.style';
import Button from './Button';

function Form() {
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
          accumulator = accumulator.concat(redditResponse.data.children);
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
export default Form;
