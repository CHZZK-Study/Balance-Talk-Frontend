import React from 'react';
import { css } from '@emotion/css';
import PostImage from './PostImage';
import TagButton from './TagButton';
import Eye from '../assets/svg/Eye';
import Comment from '../assets/svg/Comment';
import Heart from '../assets/svg/Heart';

const MainPost = () => {
  const postInfo = {
    title: '카페 주문',
    views: 126,
    likeCount: 6,
    commentCount: 5,
    voteCount: 5548,
    deadline: '2022-02-22',
    tags: ['음식', '카페'],
    balanceOptions: [
      {
        optionTitle: '선택지 제목',
        optionImg: '../img1.jpg',
        optionDescription: '선택지 설명...',
      },
      {
        optionImg: '../img2.jpg',
        optionTitle: '선택지 제목',
        optionDescription: '선택지 설명...',
      },
    ],
    createdAt: '2022-02-12',
    createdBy: '작성자 닉네임',
    profilePhoto: '프로필 사진(선택)',
  };

  const images = [
    { optionImg: 'coffee.jpg', optionTitle: '커피' },
    { optionImg: 'juice.jpg', optionTitle: '쥬스' },
  ];

  return (
    <div className={css({ display: 'flex' })}>
      <PostImage images={images} size="large" />
      <div
        className={css({
          marginLeft: '50px',
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <div className={css({ flex: 1 })} />
        <div className={css({ display: 'flex', marginBottom: '10px' })}>
          <div
            className={css({
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontSize: '48px',
              textShadow: '0px 4px 4px gray',
            })}
          >
            {postInfo.title}
          </div>
          <div className={css({ marginTop: '10px', marginLeft: '10px' })}>
            {postInfo &&
              postInfo.tags.map((tag) => {
                return <TagButton key={tag} tag={tag} />;
              })}
          </div>
        </div>
        <div
          className={css({
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: '24px',
            marginBottom: '20px',
          })}
        >
          현재 투표수 : {postInfo.voteCount}
        </div>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
          })}
        >
          <button
            type="button"
            className={css({
              backgroundColor: '#FFD369',
              border: 0,
              borderRadius: '10px',
              fontFamily: 'SpoqaHanSansNeo-Bold',
              fontSize: '20px',
              width: '165px',
              height: '45px',
              boxShadow: '0px 4px 4px gray',
              ':hover': {
                backgroundColor: '#E5BD5E',
              },
            })}
          >
            투표하기
          </button>
        </div>
        <div
          className={css({ display: 'flex', justifyContent: 'space-between' })}
        >
          <div className={css({})}>
            <Eye />
            <span
              className={css({
                marginLeft: '5px',
                marginRight: '5px',
                position: 'relative',
                bottom: '7px',
              })}
            >
              {postInfo.views}
            </span>
            <Comment />
            <span
              className={css({
                marginLeft: '5px',
                marginRight: '5px',
                position: 'relative',
                bottom: '7px',
              })}
            >
              {postInfo.commentCount}
            </span>
          </div>
          <div>
            <Heart />
            <span
              className={css({
                marginLeft: '5px',
                marginRight: '5px',
                position: 'relative',
                bottom: '7px',
              })}
            >
              {postInfo.likeCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
