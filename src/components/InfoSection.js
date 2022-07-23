import React from 'react';
import * as S from './InfoSection.style';

function InfoSection() {
  return (
    <S.Section>
      <S.Article>
        <S.H2 id="how-it-works">How it works</S.H2>
        <S.Ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
          <li>See immediately when to submit your reddit post.</li>
        </S.Ul>
      </S.Article>
      <S.Article>
        <S.H2 id="about">About</S.H2>
        <S.P>
          This app was created during a course on
          <S.SectionA href="https://profy.dev" target="_blank" rel="noreferrer"> profy.dev </S.SectionA>
          with the goal to implement a pixel-perfect real-world application with professional
          workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
          <S.SectionA href="https://profy.dev/employers" target="_blank" rel="noreferrer">Click here for more information.</S.SectionA>
        </S.P>
      </S.Article>
    </S.Section>
  );
}

export default InfoSection;
