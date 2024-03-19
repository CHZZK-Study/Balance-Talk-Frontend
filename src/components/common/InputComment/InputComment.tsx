/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { useCreateComment } from '@/hooks/comment/useCreateComment';
import Button from '../../design/Button/Button';
import Input from '../../design/Input/Input';

interface InputCommentProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  postId: number;
  selectedOptionId: number;
}

const InputComment = ({
  value,
  onChange,
  reset,
  postId,
  selectedOptionId,
}: InputCommentProps) => {
  const { inputRef, handleSubmit } = useCreateComment({
    value,
    postId,
    selectedOptionId,
    reset,
  });

  return (
    <Input
      name="content"
      placeholder="댓글을 입력해주세요"
      size="medium"
      value={value}
      ref={inputRef}
      onChange={onChange}
      btn={<Button onClick={handleSubmit}>등록</Button>}
      css={css({ width: '900px' })}
    />
  );
};

export default InputComment;
