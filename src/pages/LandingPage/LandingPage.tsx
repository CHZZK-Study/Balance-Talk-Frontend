import React from 'react';
import { fetchBestPostsData, fetchPostsData } from '@/api/posts';
import Carousel from '@/components/LandingPage/Carousel';
import MainPost from '@/components/LandingPage/MainPost';
import PostImage from '@/components/common/PostImage/PostImage';
import Heading from '@/components/common/Heading/Heading';
import { ImageInfo, Post, PostWithPagenation } from '@/types/post';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  headingWithButtonWrapper,
  headingWrapper,
  landingContainer,
  morePostWrapper,
  recommendPostWrapper,
} from './LandingPage.style';
import Button from '@/components/common/Button/Button';
import { AngleSmallDown, BookmarkRR, BookmarkSR, Search } from '@/assets';

type PostInfo = {
  id: number;
  balanceOptions: ImageInfo[];
};

const LandingPage = () => {
  // const navigate = useNavigate();

  // const { data } = useQuery({
  //   queryKey: ['posts', { sort: 'createdAt', page: 0 }],
  //   queryFn: ({ queryKey }) => {
  //     const [, queryOptions] = queryKey;
  //     const { sort, page } = queryOptions as { sort: string; page: number };
  //     return fetchPostsData(sort, page);
  //   },
  // });

  // const { data: bestPost } = useQuery({
  //   queryKey: ['posts', 'best'],
  //   queryFn: fetchBestPostsData,
  // });

  // if (data?.content.length === 0) {
  //   return <div>Fail to Load Post Data</div>;
  // }

  // const extractBalanceOptions = (datas: PostWithPagenation): PostInfo[] => {
  //   return datas.content.map((post) => {
  //     return {
  //       id: post.id,
  //       balanceOptions: post.balanceOptions,
  //     };
  //   });
  // };

  // const postInfos = data ? extractBalanceOptions(data) : [];

  // const renderCarouselItems = (postInfo: PostInfo) => {
  //   return (
  //     <div css={css({ margin: '10px' })} key={postInfo.id}>
  //       <PostImage
  //         images={postInfo.balanceOptions}
  //         size="medium"
  //         postId={postInfo.id}
  //       />
  //     </div>
  //   );
  // };

  // const renderMainPost = (post: Post) => {
  //   return <MainPost post={post} key={post.id} />;
  // };

  return (
    <div css={landingContainer}>
      <Button variant="primary">BUTTON</Button>
      <Button variant="outlinePrimary">BUTTON</Button>
      <Button variant="outlineShadow" iconRight={<AngleSmallDown />}>
        BUTTON
      </Button>
      <Button variant="outlineShadow" size="medium" iconLeft={<BookmarkRR />}>
        234
      </Button>
      <Button variant="outlineShadow" size="medium" iconLeft={<BookmarkSR />}>
        234
      </Button>
      <Button variant="outlineHighlightR">BUTTONNNNNNNNNNN</Button>
      <Button variant="outlineHighlightB">BUTTONNNNNNNNNNN</Button>
      <Button variant="circle">
        <Search />
      </Button>
      {/* <div css={recommendPostWrapper}>
        <div css={headingWrapper}>
          <Heading size="small">추천 게시글</Heading>
        </div>
        <Carousel
          itemWidth={1100}
          items={bestPost}
          render={renderMainPost}
          showLength={1}
        />
      </div>
      <div css={morePostWrapper}>
        <div css={headingWithButtonWrapper}>
          <Heading size="small">더 많은 게시글</Heading>
          <span
            css={css({
              fontSize: '14px',
              cursor: 'pointer',
            })}
            onClick={() => navigate('/posts')}
            role="presentation"
          >
            더보기
          </span>
        </div>
        <Carousel
          items={postInfos}
          render={renderCarouselItems}
          showLength={3}
        />
      </div> */}
    </div>
  );
};

export default LandingPage;
