/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, KeyboardEvent } from 'react';
import { css } from '@emotion/react';
import { useCreateComment } from '@/hooks/comment/useCreateComment';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

interface InputNewCommentProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  postId: number;
  selectedOptionId: number;
}

const InputNewComment = ({
  value,
  onChange,
  reset,
  postId,
  selectedOptionId,
}: InputNewCommentProps) => {
  const { inputRef, handleSubmit } = useCreateComment({
    value,
    postId,
    selectedOptionId,
    reset,
  });

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false)
      handleSubmit();
  };

  return (
    <Input
      name="content"
      placeholder="댓글을 입력해주세요"
      size="medium"
      value={value}
      ref={inputRef}
      onChange={onChange}
      onKeyDown={handleEnterKeyDown}
      btn={<Button onClick={handleSubmit}>등록</Button>}
      css={css({ width: '900px' })}
    />
  );
};

export default InputNewComment;
