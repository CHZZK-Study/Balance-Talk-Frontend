import React from 'react';
import { buttonWrapStyle } from './PostActionButton.style';

interface PostActionProps {
  action?: 'save' | 'submit';
}

const PostActionButton = ({ action = 'save' }: PostActionProps) => {
  return (
    <div css={buttonWrapStyle(action)}>
      <div>{action === 'save' ? '임시저장하기' : '등록하기'}</div>
    </div>
  );
};

export default PostActionButton;
