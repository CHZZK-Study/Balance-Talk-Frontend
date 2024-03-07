import React from 'react';
import { css } from '@emotion/react';
import UserComment from '../../../../components/common/UserComment';
import { Comment } from '../../../../types/comment';

export type CommentsByOptionProps = {
  balanceOptionTitle: string;
  comments: Comment[];
  isLeftOption: boolean;
};

const CommentsByOption = ({
  balanceOptionTitle,
  comments,
  isLeftOption,
}: CommentsByOptionProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        gap: '1.5rem',
        padding: '1rem',
        backgroundColor: `${isLeftOption ? 'white' : '#D9D9D9'} `,
      })}
    >
      <div
        css={css({
          textAlign: 'center',
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1.5rem',
        })}
      >
        {balanceOptionTitle}
      </div>
      <div
        css={css({
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1rem',
        })}
      >
        댓글 {comments?.length}개
      </div>
      <div
        css={css({
          border: '1px solid #EEEEEE',
          borderRadius: '0.5rem',
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1rem',
          padding: '0.5rem',
        })}
      >
        <input type="text" placeholder="댓글을 입력해주세요" />
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        })}
      >
        {comments.map((comment: Comment) => (
          <UserComment {...comment} key={comment.createdAt} />
        ))}
      </div>
    </div>
  );
};

export default CommentsByOption;
