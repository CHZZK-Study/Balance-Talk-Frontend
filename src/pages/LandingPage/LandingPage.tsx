import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import MainPost from '../../components/MainPost';
import PostImage from '../../components/PostImage';
import Carousel from '../../components/Carousel';
import { Post } from '../../types/post';
import { fetchPostsData } from '../../api/posts/posts';
import { Hearts } from '../../assets';

const LandingPage = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsData,
  });

  const extractBalanceOptions = (datas: Post[]) => {
    return datas.map((post) => {
      return {
        id: post.id,
        balanceOptions: post.balanceOptions,
      };
    });
  };

  const postInfos = data ? extractBalanceOptions(data) : [];

  const CarouselItems = postInfos.map((postInfo) => {
    return (
      <PostImage
        key={postInfo.id}
        images={postInfo.balanceOptions}
        size="medium"
      />
    );
  });

  return (
    <div
      css={css({
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <div
        css={css({
          display: 'flex',
          justifyContent: 'flex-start',
          width: '1080px',
          marginBottom: '20px',
        })}
      >
        <h2
          css={css({
            fontSize: '24px',
            fontFamily: 'SpoqaHanSansNeo-Medium',
          })}
        >
          추천 게시글
        </h2>
      </div>
      <MainPost post={data?.[0]} />
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          width: '1200px',
          marginBottom: '20px',
          marginTop: '50px',
        })}
      >
        <h2
          css={css({
            fontSize: '24px',
            fontFamily: 'SpoqaHanSansNeo-Medium',
          })}
        >
          더 많은 게시글
        </h2>
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
      <Carousel items={CarouselItems} />
    </div>
  );
};

export default LandingPage;
