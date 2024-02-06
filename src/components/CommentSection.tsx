import React from 'react';
import { css } from '@emotion/css';
import UserComment from './UserComment';

interface CommentSectionProps {
  title: string;
  color?: string;
}

const CommentSection = ({ title, color }: CommentSectionProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        gap: '1.5rem',
        padding: '1rem',
        backgroundColor: `${color || 'white'} `,
      })}
    >
      <div
        className={css({
          textAlign: 'center',
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1.5rem',
        })}
      >
        {title}
      </div>
      <div
        className={css({
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1rem',
        })}
      >
        댓글 20개
      </div>
      <div
        className={css({
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
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        })}
      >
        <UserComment isMyComment />
        <UserComment />
        <UserComment />
        <UserComment isMyComment />
        <UserComment isMyComment />
      </div>
    </div>
  );
};
export default CommentSection;
