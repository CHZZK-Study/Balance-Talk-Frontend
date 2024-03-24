import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Delete } from '@/assets';
import { deleteComment } from '@/api/comments/comments';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { pulsate } from '../../styles/keyframes';

const CommentDeleteButton = ({
  postId,
  commentId,
}: {
  postId: number;
  commentId: number;
}) => {
  const [isAnimation, setIsAnimation] = useState(false);
  const queryClient = useQueryClient();

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 200);
  };

  const deleteComemntMutation = useMutation({
    mutationFn: ({
      _postId,
      _commentId,
    }: {
      _postId: number;
      _commentId: number;
    }) => deleteComment(_postId, _commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts', 'comments', postId],
      });
    },
  });

  const handleDeleteComment = () => {
    animationTrigger();
    deleteComemntMutation.mutate({ _postId: postId, _commentId: commentId });
  };

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2px',
        width: '38px',
        height: '38px',
        cursor: 'pointer',
        ':hover': { '& svg path': { stroke: '#ADADAD' } },
      })}
      onClick={handleDeleteComment}
      role="presentation"
    >
      <Delete
        css={css({
          fill: 'none',
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default CommentDeleteButton;
