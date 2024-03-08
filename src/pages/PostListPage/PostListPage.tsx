import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import PostItem from '../../components/PostListPage/PostItem';
import SortButton from '../../components/Buttons/SortButton';
import ToggleButton from '../../components/Buttons/ToggleButton';
import { fetchPostsData } from '../../api/posts/posts';
import CreatePostButton from '../../components/PostListPage/CreatePostButton';
import { postListWrapper, headingWrapper } from './PostListPage.style';
import Heading from '../../components/design/Heading/Heading';

const PostList = () => {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsData,
  });

  return (
    <div
      css={css({
        width: '80vw',
        margin: '0 auto',
      })}
    >
      <CreatePostButton />
      <div css={headingWrapper}>
        <Heading
          size="small"
          css={css({
            fontFamily: 'SpoqaHanSansNeo-Medium',
          })}
        >
          추천 게시글
        </Heading>
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
      <div css={postListWrapper}>
        {posts &&
          posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default PostList;
