import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { useUserInfo } from '@/hooks/common/useUserInfo';
import { Report } from '@/assets';
import { fetchReportComment } from '@/api/comments/comments';
import { pulsate } from '../../styles/keyframes';

type CommentReportButtonProps = {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  commentId: number;
  postId: number;
};

const CommentReportButton = ({
  handleModal,
  commentId,
  postId,
}: CommentReportButtonProps) => {
  const { isLoggedIn } = useUserInfo();

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const reportPost = useMutation({
    mutationFn: ({
      _postId,
      _commentId,
    }: {
      _postId: number;
      _commentId: number;
    }) => fetchReportComment(_postId, _commentId),
  });

  const handleCommentReport = () => {
    if (!isLoggedIn) {
      handleModal(true);
      return;
    }
    animationTrigger();
    if (postId !== undefined)
      reportPost.mutate({ _postId: postId, _commentId: commentId });
  };

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2px',
        alignItems: 'center',
        borderRadius: '19px',
        width: '38px',
        height: '38px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: '#A783AA',
          '& svg path': {
            fill: 'white',
          },
        },
        transition: 'background-color 0.2s',
      })}
      onClick={handleCommentReport}
      role="presentation"
    >
      <Report
        css={css({
          fill: `green`,
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default CommentReportButton;
