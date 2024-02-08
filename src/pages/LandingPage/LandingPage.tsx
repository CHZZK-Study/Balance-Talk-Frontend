import React from 'react';
import { css } from '@emotion/react';
import MainPost from '../../components/MainPost';
import PostImage from '../../components/PostImage';
import Carousel from '../../components/Carousel';

const LandingPage = () => {
  const postInfos = [
    {
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
    {
      balanceOptions: [
        { optionImg: 'coffee.jpg', optionTitle: '커피' },
        { optionImg: 'juice.jpg', optionTitle: '쥬스' },
      ],
    },
  ];

  const CarouselItems = postInfos.map((postInfo) => {
    return <PostImage images={postInfo.balanceOptions} size="medium" />;
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
      <MainPost />
      <Carousel items={CarouselItems} />
    </div>
  );
};

export default LandingPage;
