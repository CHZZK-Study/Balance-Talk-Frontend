import React, { SetStateAction, useEffect, useRef } from 'react';
import Button from '@/components/atoms/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment } from '@/api/comments';
import {
  deleteCommentModalWrapper,
  titleWrapper,
  btnsWrapper,
} from './DeleteCommentModal.style';

interface DeleteCommentModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  postId: number;
  commentId: number;
  parentCommentId: number | null;
}

const DeleteCommentModal = ({
  handleModal,
  postId,
  commentId,
  parentCommentId,
}: DeleteCommentModalProps) => {
  const deleteCommentModalRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const deleteComemntMutation = useMutation({
    mutationFn: ({
      _postId,
      _commentId,
    }: {
      _postId: number;
      _commentId: number;
    }) => deleteComment(_postId, _commentId),
    onSuccess: () => {
      if (parentCommentId) {
        queryClient.invalidateQueries({
          queryKey: ['posts', 'comments', postId, parentCommentId, 'replies'],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: ['posts', 'comments', postId],
        });
      }
    },
  });

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        deleteCommentModalRef.current &&
        !deleteCommentModalRef.current.contains(event.target as Node)
      ) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [deleteCommentModalRef, handleModal]);

  return (
    <div ref={deleteCommentModalRef} css={deleteCommentModalWrapper}>
      <div css={titleWrapper}>
        {parentCommentId ? '답글' : '댓글'}을 삭제하시겠습니까?
      </div>
      <div css={btnsWrapper}>
        <Button variant="cancel" onClick={() => handleModal(false)}>
          다음에 하기
        </Button>
        <Button
          onClick={() => {
            deleteComemntMutation.mutate({
              _postId: postId,
              _commentId: commentId,
            });
            handleModal(false);
          }}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default DeleteCommentModal;
