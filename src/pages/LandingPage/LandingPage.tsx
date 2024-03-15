import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import MainPost from '../../components/LandingPage/MainPost';
import PostImage from '../../components/common/PostImage/PostImage';
import Carousel from '../../components/LandingPage/Carousel';
import { ImageInfo, Post } from '../../types/post';
import { fetchPostsData } from '../../api/posts/posts';
import {
  headingWithButtonWrapper,
  headingWrapper,
  landingContainer,
  morePostWrapper,
  recommendPostWrapper,
} from './LandingPage.style';
import Heading from '../../components/design/Heading/Heading';

type PostInfo = {
  id: number;
  balanceOptions: ImageInfo[];
};

const LandingPage = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsData,
  });

  if (data?.length === 0) {
    return <div>Fail to Load Post Data</div>;
  }

  const extractBalanceOptions = (datas: Post[]): PostInfo[] => {
    return datas.map((post) => {
      return {
        id: post.id,
        balanceOptions: post.balanceOptions,
      };
    });
  };

  const postInfos = data ? extractBalanceOptions(data) : [];

  const renderCarouselItems = (postInfo: PostInfo) => {
    return (
      <div css={css({ margin: '10px' })} key={postInfo.id}>
        <PostImage images={postInfo.balanceOptions} size="medium" />
      </div>
    );
  };

  return (
    <div css={landingContainer}>
      <div css={recommendPostWrapper}>
        <div css={headingWrapper}>
          <Heading
            size="small"
            css={css({
              fontFamily: 'SpoqaHanSansNeo-Medium',
            })}
          >
            추천 게시글
          </Heading>
        </div>
        <MainPost post={data?.[0]} />
      </div>

      <div css={morePostWrapper}>
        <div css={headingWithButtonWrapper}>
          <Heading
            size="small"
            css={css({
              fontFamily: 'SpoqaHanSansNeo-Medium',
            })}
          >
            더 많은 게시글
          </Heading>
          <span
            css={css({
              fontFamily: 'SpoqaHanSansNeo-Regular',
              fontSize: '14px',
              cursor: 'pointer',
            })}
            onClick={() => navigate('/posts')}
            role="presentation"
          >
            더보기
          </span>
        </div>
        <Carousel items={postInfos} render={renderCarouselItems} />
      </div>
    </div>
  );
};

export default LandingPage;
