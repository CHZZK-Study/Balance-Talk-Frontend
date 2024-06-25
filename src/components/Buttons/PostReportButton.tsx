import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { Report } from '@/assets';
import { fetchReportPost } from '@/api/posts';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { pulsate } from '../../styles/keyframes';

type PostReportButtonProps = {
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
  handleReportModal: React.Dispatch<SetStateAction<boolean>>;
  handleReportErrorType: React.Dispatch<
    SetStateAction<'CONFLICT' | 'FORBIDDEN' | null>
  >;
  postId: number;
};

const PostReportButton = ({
  handleLoginModal,
  handleReportModal,
  handleReportErrorType,
  postId,
}: PostReportButtonProps) => {
  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const reportPost = useMutation({
    mutationFn: fetchReportPost,
    onSuccess: () => handleReportModal(true),
    onError: (e: { httpStatus: 'CONFLICT' | 'FORBIDDEN'; message: string }) => {
      handleReportErrorType(e.httpStatus);
      handleReportModal(true);
    },
  });

  const handlePostReport = () => {
    if (!member) {
      handleLoginModal(true);
      return;
    }
    animationTrigger();
    if (postId !== undefined) reportPost.mutate(postId);
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
      onClick={handlePostReport}
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

export default PostReportButton;
