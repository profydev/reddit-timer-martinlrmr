import React, { useEffect, useState } from 'react';
import * as S from './LoadData.style';

function LoadData() {
  const subredditName = 'javascript';
  const [isLoading, setLoading] = useState(true);
  const [array, setArray] = useState({});

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100`)
      .then((response) => response.json())
      .then((data) => {
        setArray(data);
        setLoading(false);
      });
  }, [subredditName]);

  return (
    <>
      {isLoading ? <S.Spinner /> : <p>{array.kind}</p>}
    </>
  );
}

export default LoadData;
