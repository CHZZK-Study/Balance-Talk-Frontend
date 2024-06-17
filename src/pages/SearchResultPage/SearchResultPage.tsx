import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostSearchTag, fetchPostSearchTitle } from '@/api/posts/posts';
import { Post } from '@/types/post';
import PostItem from '@/components/PostListPage/PostItem';
import ToggleButton from '../../components/Buttons/ToggleButton';
import CreatePostButton from '../../components/PostListPage/CreatePostButton';
import { postListWrapper, headingWrapper } from './SearchResultPage.style';
import Heading from '../../components/design/Heading/Heading';

const SearchResultPage = () => {
  const [showClosed, setShowClosed] = useState(true);

  const searchParams = new URLSearchParams(useLocation().search);

  const keyword = searchParams.get('keyword');
  const tagName = searchParams.get('tagName');

  const searchByTitle = useQuery({
    queryKey: ['posts', 'search', 'title', keyword],
    queryFn: () => fetchPostSearchTitle(keyword),
    enabled: !!keyword,
  });

  const searchByTag = useQuery({
    queryKey: ['posts', 'search', 'tags', tagName],
    queryFn: () => fetchPostSearchTag(tagName),
    enabled: !!tagName,
  });

  const posts = keyword
    ? searchByTitle.data
    : tagName
      ? searchByTag.data
      : undefined;

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div
      css={css({
        width: '80vw',
        margin: '0 auto',
        height: '100%',
      })}
    >
      <div css={css({ height: '100%' })}>
        <CreatePostButton />
        <div css={headingWrapper}>
          <Heading size="small">검색 결과</Heading>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
            })}
          >
            <ToggleButton
              setShowClosed={setShowClosed}
              showClosed={showClosed}
            />
          </div>
        </div>
        <div
          css={css({
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          })}
        >
          <div css={postListWrapper}>
            {posts?.length !== 0 ? (
              posts?.map((post) => {
                return (
                  <PostItem key={post.id} post={post} showClosed={showClosed} />
                );
              })
            ) : (
              <div>검색 결과를 찾을 수 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
