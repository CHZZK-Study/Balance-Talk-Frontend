import React from 'react';
import { css } from '@emotion/react';
import UserComment, {
  UserCommentProps,
} from '../../../../components/UserComment';

export type CommentsByOptionProps = {
  optionTitle: string;
  userComments: UserCommentProps[];
  color: string;
};

const CommentsByOption = ({
  optionTitle,
  userComments,
  color,
}: CommentsByOptionProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        gap: '1.5rem',
        padding: '1rem',
        backgroundColor: `${color || 'white'} `,
      })}
    >
      <div
        css={css({
          textAlign: 'center',
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1.5rem',
        })}
      >
        {optionTitle}
      </div>
      <div
        css={css({
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1rem',
        })}
      >
        댓글 {userComments.length}개
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
        {userComments.map((userComment: UserCommentProps) => (
          <UserComment {...userComment} key={userComment.id} />
        ))}
      </div>
    </div>
  );
};

export default CommentsByOption;
