import { useEffect, useState } from 'react';

export async function fetchTopRedditPosts(subredditParameter, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subredditParameter}/top.json?t=year&limit=100`;
  if (after) {
    url += `&after=${after}`;
  }

  const response = await fetch(url);
  const { data } = await response.json();
  const allPosts = previousPosts.concat(data.children);

  const noMorePosts = data && data.dist < 100;
  const limitReached = allPosts.length >= 500;
  if (noMorePosts || limitReached) {
    return allPosts;
  }

  return fetchTopRedditPosts(subredditParameter, allPosts, data.after);
}

function useFetchPosts(subredditParameter) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    setStatus('pending');

    fetchTopRedditPosts(subredditParameter)
      .then((newPosts) => {
        setPosts(() => newPosts.map((redditPost) => (
          {
            id: redditPost.data.id,
            title: redditPost.data.title,
            permalink: redditPost.data.permalink,
            created: redditPost.data.created,
            score: redditPost.data.score,
            num_comments: redditPost.data.num_comments,
            author: redditPost.data.author,
            weekday: new Date(redditPost.data.created * 1000).toLocaleString('en-us', { weekday: 'long' }),
            hour: new Date(redditPost.data.created * 1000).getHours(),
            time: new Date(redditPost.data.created * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase(),
          }
        )));
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [subredditParameter]);

  return {
    isLoading: status === 'pending',
    hasError: status === 'rejected',
    posts,
  };
}

export default useFetchPosts;
