import { fetchPostsData } from '@/api/posts/posts';
import SortButton from '@/components/Buttons/SortButton';
import ToggleButton from '@/components/Buttons/ToggleButton';
import CreatePostButton from '@/components/PostListPage/CreatePostButton';
import PostItem from '@/components/PostListPage/PostItem';
import Heading from '@/components/common/Heading/Heading';
import { css } from '@emotion/react';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { MouseEvent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  headingWrapper,
  postListContainer,
  postListInnerContainer,
  postListWrapper,
} from './PostListPage.style';

const sortInfo = {
  최신순: { index: 0, param: 'createdAt' },
  조회순: { index: 1, param: 'views' },
  추천순: { index: 2, param: 'likesCount' },
};

type Sort = '추천순' | '최신순' | '조회순';

const PostList = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const [focus, setFocus] = useState(0);
  const [sort, setSort] = useState('createdAt');
  const [showClosed, setShowClosed] = useState(false);

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['posts', showClosed, { sort }],
    queryFn: ({ pageParam }) => fetchPostsData(sort, pageParam, showClosed),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.pageable.pageNumber < lastPage.totalPages) {
        return lastPage.pageable.pageNumber + 1;
      }
      return undefined;
    },
  });

  const onSortClickHandler = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const selected = target.textContent as Sort;
    setSort(sortInfo[selected].param);
    setFocus(sortInfo[selected].index);
  };
  const contents = posts?.pages;

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetching]);

  return (
    <div css={postListContainer}>
      <div css={css({ height: '100%' })}>
        <CreatePostButton />
        <div css={headingWrapper}>
          <Heading size="small">게시글 목록</Heading>
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
            <SortButton onClickHandler={onSortClickHandler} focus={focus} />
          </div>
        </div>
        <div css={postListInnerContainer}>
          <div css={postListWrapper}>
            {contents &&
              contents.map((page) => {
                const postItems = page.content.map((post) => (
                  <PostItem key={post.id} post={post} />
                ));

                return postItems;
              })}
            <div
              ref={ref}
              css={css({
                height: '50px',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
