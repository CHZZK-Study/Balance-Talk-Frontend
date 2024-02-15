import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import PostItem from './sections/PostItem';
import SortButton from '../../components/SortButton';
import ToggleButton from '../../components/ToggleButton';
import { Post } from '../../types/post';

const URL = 'http://localhost:3000';

const fetchPostsData = async (): Promise<Post[]> => {
  const response = await fetch(`${URL}/posts`);
  const result = (await response.json()) as Post[];
  return result;
};

const PostList = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsData,
  });

  return (
    <div
      css={css({
        width: '100vw',
      })}
    >
      <button
        type="button"
        css={css({
          position: 'relative',
          marginBottom: '10px',
          left: '75vw',
          backgroundColor: '#FFD369',
          border: 0,
          borderRadius: '10px',
          fontFamily: 'SpoqaHanSansNeo-Medium',
          fontSize: '16px',
          width: '100px',
          height: '40px',
          boxShadow: '0px 4px 4px gray',
          ':hover': {
            backgroundColor: '#E5BD5E',
          },
        })}
      >
        글쓰기
      </button>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        })}
      >
        <h2
          css={css({
            fontSize: '24px',
            fontFamily: 'SpoqaHanSansNeo-Medium',
          })}
        >
          게시글 목록
        </h2>
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
          })}
        >
          <ToggleButton />
          <SortButton />
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          width: '60%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          margin: '0 auto',
        })}
      >
        {posts &&
          posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default PostList;
