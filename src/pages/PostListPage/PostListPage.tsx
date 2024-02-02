import React from 'react';
import { css } from '@emotion/css';
import PostItem from './sections/PostItem';
import SortButton from '../../components/SortButton';
import ToggleButton from '../../components/ToggleButton';

const PostList = () => {
  const postInfos = [
    {
      id: 1,
      title: '카페 주문',
      views: 126,
      likeCount: 6,
      commentCount: 5,
      voteCount: 5548,
      deadline: '2022-02-22',
      tags: ['음식', '카페'],
      balanceOptions: [
        {
          optionImg: 'coffee.jpg',
          optionTitle: '커피',
          optionDescription: '선택지 설명...',
        },
        {
          optionImg: 'juice.jpg',
          optionTitle: '쥬스',
          optionDescription: '선택지 설명...',
        },
      ],
      createdAt: '2022-02-12',
      createdBy: '작성자 닉네임',
      profilePhoto: '프로필 사진(선택)',
    },
  ];

  return (
    <div
      className={css({
        width: '100vw',
      })}
    >
      <button
        type="button"
        className={css({
          position: 'relative',
          marginBottom: '10px',
          left: '75vw',
          backgroundColor: '#FFD369',
          border: 0,
          borderRadius: '10px',
          fontFamily: 'SpoqaHanSansNeo-Medium',
          fontSize: '16px',
          width: '100px',
          height: '40px',
          boxShadow: '0px 4px 4px gray',
          ':hover': {
            backgroundColor: '#E5BD5E',
          },
        })}
      >
        글쓰기
      </button>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        })}
      >
        <h2
          className={css({
            fontSize: '24px',
            fontFamily: 'SpoqaHanSansNeo-Medium',
          })}
        >
          게시글 목록
        </h2>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
          })}
        >
          <ToggleButton />
          <SortButton />
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          margin: '20px',
        })}
      >
        {postInfos.map((postInfo) => {
          return <PostItem key={postInfo.id} post={postInfo} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
