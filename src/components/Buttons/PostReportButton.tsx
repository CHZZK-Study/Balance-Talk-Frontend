import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { useUserInfo } from '@/hooks/common/useUserInfo';
import { Report } from '@/assets';
import { fetchReportPost } from '@/api/posts/posts';
import { pulsate } from '../../styles/keyframes';

type PostReportButtonProps = {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  postId: number;
};

const PostReportButton = ({ handleModal, postId }: PostReportButtonProps) => {
  const { isLoggedIn } = useUserInfo();

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const reportPost = useMutation({
    mutationFn: fetchReportPost,
  });

  const handlePostReport = () => {
    if (!isLoggedIn) {
      handleModal(true);
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
          fill: `green`,
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default PostReportButton;
