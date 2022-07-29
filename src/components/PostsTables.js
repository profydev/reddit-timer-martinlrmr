import React from 'react';
import * as S from './PostsTables.style';

function PostsTable() {
  const row = (
    <tr>
      <S.Td><a href="https://profy.dev/employers" target="_blank" rel="noreferrer">Title</a></S.Td>
      <S.Td>Time Posted</S.Td>
      <S.Td>Comments</S.Td>
      <S.Td><a href="https://profy.dev/employers" target="_blank" rel="noreferrer">Autho</a></S.Td>
    </tr>
  );

  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Title</S.Th>
          <S.Th>Time Posted</S.Th>
          <S.Th>Comments</S.Th>
          <S.Th>Author</S.Th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
      <S.Caption>Posts</S.Caption>
    </S.Table>
  );
}

export default PostsTable;
