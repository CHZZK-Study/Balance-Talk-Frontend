/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, KeyboardEvent } from 'react';
import { css } from '@emotion/react';

import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { useCreateReply } from '@/hooks/comment/useCreateReply';

interface InputNewReplyProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  postId: number;
  commentId: number;
  memberId: number;
}

const InputNewReply = ({
  value,
  onChange,
  reset,
  commentId,
  memberId,
  postId,
}: InputNewReplyProps) => {
  const { inputRef, handleSubmit } = useCreateReply({
    value,
    postId,
    commentId,
    memberId,
    reset,
  });

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false)
      handleSubmit();
  };

  return (
    <Input
      name="content"
      placeholder="답글을 입력해주세요"
      size="medium"
      value={value}
      ref={inputRef}
      onChange={onChange}
      onKeyDown={handleEnterKeyDown}
      btn={<Button onClick={handleSubmit}>등록</Button>}
      css={css({ width: '250px' })}
    />
  );
};

export default InputNewReply;
