import React from 'react';
import { css } from '@emotion/react';
import MainPost from '../../components/MainPost';
import PostImage from '../../components/PostImage';
import Carousel from '../../components/Carousel';

const LandingPage = () => {
  const postInfos = [
    {
      id: 1,
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      id: 2,
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      id: 3,
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      id: 4,
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      id: 5,
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      id: 6,
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
  ];

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
      <MainPost />
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
        >
          더보기
        </span>
      </div>
      <Carousel items={CarouselItems} />
    </div>
  );
};

export default LandingPage;
