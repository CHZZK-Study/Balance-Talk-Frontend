import React, { MouseEvent, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import PostItem from '../../components/PostListPage/PostItem';
import SortButton from '../../components/Buttons/SortButton';
import ToggleButton from '../../components/Buttons/ToggleButton';
import { fetchPostsData } from '../../api/posts/posts';
import CreatePostButton from '../../components/PostListPage/CreatePostButton';
import { postListWrapper, headingWrapper } from './PostListPage.style';
import Heading from '../../components/design/Heading/Heading';

const sortInfo = {
  최신순: { index: 0, param: 'createdAt' },
  조회순: { index: 1, param: 'views' },
  추천순: { index: 2, param: 'likesCount' },
};

type Sort = '추천순' | '최신순' | '조회순';

const PostList = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 0,
  });

  const [focus, setFocus] = useState(0);
  const [sort, setSort] = useState('createdAt');
  const [showClosed, setShowClosed] = useState(true);

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['posts', { sort }],
    queryFn: ({ pageParam }) => fetchPostsData(sort, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.pageable.pageNumber < lastPage.totalPages) {
        return lastPage.pageable.pageNumber + 1;
      }
      return undefined;
    },
    // getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 1,
  });

  const onSortClickHandler = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const selected = target.textContent as Sort;
    setSort(sortInfo[selected].param);
    setFocus(sortInfo[selected].index);
  };
  const contents = posts?.pages;

  useEffect(() => {
    console.log('inview', inView);
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetching]);

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
            <ToggleButton
              setShowClosed={setShowClosed}
              showClosed={showClosed}
            />
            <SortButton onClickHandler={onSortClickHandler} focus={focus} />
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
            {contents &&
              contents.map((page) => {
                const postItems = page.content.map((post) => (
                  <PostItem key={post.id} post={post} showClosed={showClosed} />
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
