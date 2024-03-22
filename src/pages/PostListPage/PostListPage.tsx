import React, { MouseEvent, useState } from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
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
  const [focus, setFocus] = useState(0);
  const [sort, setSort] = useState('createdAt');
  const [page, setPage] = useState(0);
  const [showClosed, setShowClosed] = useState(true);

  const { data: posts } = useQuery({
    queryKey: ['posts', { sort, page }],
    queryFn: () => fetchPostsData(sort, page),
  });

  const onSortClickHandler = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const selected = target.textContent as Sort;
    setSort(sortInfo[selected].param);
    setFocus(sortInfo[selected].index);
  };
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
          <ToggleButton setShowClosed={setShowClosed} showClosed={showClosed} />
          <SortButton onClickHandler={onSortClickHandler} focus={focus} />
        </div>
      </div>
      <div css={postListWrapper}>
        {posts &&
          posts.content.map((post) => {
            return (
              <PostItem key={post.id} post={post} showClosed={showClosed} />
            );
          })}
      </div>
    </div>
  );
};

export default PostList;
