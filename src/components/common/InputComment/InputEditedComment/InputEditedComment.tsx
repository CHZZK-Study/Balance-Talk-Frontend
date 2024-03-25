/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, SetStateAction } from 'react';
import { css } from '@emotion/react';
import Button from '@/components/design/Button/Button';
import Input from '@/components/design/Input/Input';
import { useEditComment } from '@/hooks/comment/useEditComment';

interface InputEditedCommentProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  postId: number;
  commentId: number;
  parentCommentId: number;
  selectedOptionId: number;
  handleActiveEdit: React.Dispatch<SetStateAction<boolean>>;
  selectedPageNumber: number;
}

const InputEditedComment = ({
  value,
  onChange,
  commentId,
  postId,
  parentCommentId,
  selectedOptionId,
  handleActiveEdit,
  selectedPageNumber,
}: InputEditedCommentProps) => {
  const { inputRef, handleEditComment } = useEditComment({
    value,
    postId,
    commentId,
    selectedOptionId,
    handleActiveEdit,
    selectedPageNumber,
    parentCommentId,
  });

  return (
    <Input
      name="content"
      placeholder="수정할 내용을 입력해주세요"
      size="small"
      value={value}
      ref={inputRef}
      onChange={onChange}
      btn={
        <Button size="small" onClick={handleEditComment}>
          수정
        </Button>
      }
      css={css({
        width: '200px',
      })}
    />
  );
};

export default InputEditedComment;
