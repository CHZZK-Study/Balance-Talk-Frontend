import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserInfo } from '@/hooks/common/useUserInfo';
import { fetchAddLike, fetchDeleteLike } from '../../api/posts/posts';
import { NPost } from '../../types/post';
import { Hearts } from '../../assets';
import { pulsate } from '../../styles/keyframes';

type PostLikeButtonProps = {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  myLike: boolean;
  postId: number;
  likesCount: number;
};

const PostLikeButton = ({
  handleModal,
  myLike,
  postId,
  likesCount,
}: PostLikeButtonProps) => {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useUserInfo();

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const addLike = useMutation({
    mutationFn: fetchAddLike,
    onMutate: () => {
      const prevPost: NPost | undefined = queryClient.getQueryData([
        'posts',
        postId,
      ]);

      queryClient.setQueryData(['posts', postId], {
        ...prevPost,
        likesCount: likesCount + 1,
        myLike: true,
      });

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['posts', postId], context?.prevPost);
    },
  });

  const deleteLike = useMutation({
    mutationFn: fetchDeleteLike,
    onMutate: () => {
      const prevPost: NPost | undefined = queryClient.getQueryData([
        'posts',
        postId,
      ]);

      queryClient.setQueryData(['posts', postId], {
        ...prevPost,
        likesCount: likesCount - 1,
        myLike: false,
      });

      return { prevPost };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(['posts', postId], context?.prevPost);
    },
  });

  const handlePostLike = () => {
    if (!isLoggedIn) {
      handleModal(true);
      return;
    }
    animationTrigger();
    if (postId !== undefined) {
      if (myLike) {
        deleteLike.mutate(postId);
      } else {
        addLike.mutate(postId);
      }
    }
  };

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '19px',
        width: '38px',
        height: '38px',
        cursor: 'pointer',
        ':hover': { backgroundColor: 'pink' },
        transition: 'background-color 0.2s',
      })}
      onClick={handlePostLike}
      role="presentation"
    >
      <Hearts
        css={css({
          fill: `${myLike ? 'red' : 'none'}`,
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default PostLikeButton;
