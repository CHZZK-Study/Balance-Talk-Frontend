import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { Report } from '@/assets';
import { fetchReportComment } from '@/api/comments/comments';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { pulsate } from '../../styles/keyframes';

type CommentReportButtonProps = {
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
  handleReportModal: React.Dispatch<SetStateAction<boolean>>;
  handleReportErrorType: React.Dispatch<
    SetStateAction<'CONFLICT' | 'FORBIDDEN' | null>
  >;
  commentId: number;
  postId: number;
};

const CommentReportButton = ({
  handleLoginModal,
  handleReportModal,
  handleReportErrorType,
  commentId,
  postId,
}: CommentReportButtonProps) => {
  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const reportComment = useMutation({
    mutationFn: ({
      _postId,
      _commentId,
    }: {
      _postId: number;
      _commentId: number;
    }) => fetchReportComment(_postId, _commentId),
    onSuccess: () => handleReportModal(true),
    onError: (e: { httpStatus: 'CONFLICT' | 'FORBIDDEN'; message: string }) => {
      handleReportErrorType(e.httpStatus);
      handleReportModal(true);
    },
  });

  const handleCommentReport = () => {
    if (!member) {
      handleLoginModal(true);
      return;
    }
    animationTrigger();
    if (postId !== undefined)
      reportComment.mutate({ _postId: postId, _commentId: commentId });
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
          fill: `none`,
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default CommentReportButton;
