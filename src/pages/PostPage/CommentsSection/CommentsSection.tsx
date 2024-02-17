import { css } from '@emotion/react';
import React from 'react';
import CommentsByOption, {
  CommentsByOptionProps,
} from './CommentsByOption/CommentsByOption';

const mockUserCommentsByOptions: CommentsByOptionProps[] = [
  {
    optionTitle: '커피',
    userComments: [
      {
        isMyComment: true,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
        ],
      },
      {
        isMyComment: false,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [],
      },
      {
        isMyComment: true,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
        ],
      },
      {
        isMyComment: true,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [],
      },
      {
        isMyComment: false,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
        ],
      },
    ],
    color: '#FFFFFF',
  },
  {
    optionTitle: '쥬스',
    userComments: [
      {
        isMyComment: false,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [],
      },
      {
        isMyComment: true,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
        ],
      },
      {
        isMyComment: true,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [],
      },
      {
        isMyComment: false,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
          {
            isMyComment: true,
            name: 'haha',
            content: '밸런스톡',
            createdAt: '3일전',
            likeCount: 100,
          },
        ],
      },
      {
        isMyComment: true,
        name: 'haha',
        content: '밸런스톡',
        createdAt: '3일전',
        likeCount: 100,
        replyList: [],
      },
    ],
    color: '#C4C4C4',
  },
];

const CommentsSection = () => {
  const totalCommentsLength = mockUserCommentsByOptions.reduce(
    (acc, el) => acc + el?.userComments?.length,
    0,
  );

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <div
        css={css({
          marginTop: '1rem',
          marginBottom: '3rem',
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1.5rem',
        })}
      >
        댓글
        {totalCommentsLength}개
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <CommentsByOption {...mockUserCommentsByOptions[0]} />
        <CommentsByOption {...mockUserCommentsByOptions[1]} />
      </div>
    </div>
  );
};
export default CommentsSection;
