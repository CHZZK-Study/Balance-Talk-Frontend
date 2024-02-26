import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAddLike, fetchDeleteLike } from '../api/posts/posts';
import { Post } from '../types/post';
import { Hearts } from '../assets';
import { pulsate } from '../styles/keyframes';

type HeartButtonProps = {
  isLiked?: boolean;
  postId?: number;
};

const HeartButton = ({ isLiked, postId }: HeartButtonProps) => {
  const queryClient = useQueryClient();

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const addLike = useMutation({
    mutationFn: fetchAddLike,
    onMutate: (id) => {
      const prevPostData: Post[] | undefined = queryClient.getQueryData([
        'posts',
      ]);

      const newPostData = prevPostData?.map((post) => {
        return post.id === id
          ? { ...post, myLike: true, likeCount: post.likeCount + 1 }
          : post;
      });

      queryClient.setQueryData(['posts'], newPostData);

      return { prevPostData };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['posts'], context?.prevPostData);
    },
  });

  const deleteLike = useMutation({
    mutationFn: fetchDeleteLike,
    onMutate: (id) => {
      const prevPostData: Post[] | undefined = queryClient.getQueryData([
        'posts',
      ]);

      const newPostData = prevPostData?.map((post) => {
        return post.id === id
          ? { ...post, myLike: false, likeCount: post.likeCount - 1 }
          : post;
      });

      queryClient.setQueryData(['posts'], newPostData);

      return { prevPostData };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['posts'], context?.prevPostData);
    },
  });

  const onHeartClickHandler = () => {
    animationTrigger();
    if (postId !== undefined) {
      if (isLiked) {
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
        hegiht: '38px',
        cursor: 'pointer',
        ':hover': { backgroundColor: 'pink' },
        transition: 'background-color 0.2s',
      })}
      onClick={onHeartClickHandler}
      role="presentation"
    >
      <Hearts
        css={css({
          fill: `${isLiked ? 'red' : 'none'}`,
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default HeartButton;
