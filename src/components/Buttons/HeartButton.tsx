import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { selectAccessToken } from '@/store/auth';
import { useNewSelector } from '@/store';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { fetchAddLike, fetchDeleteLike } from '../../api/posts/posts';
import { Post } from '../../types/post';
import { DisabledHeart, Hearts } from '../../assets';
import { pulsate } from '../../styles/keyframes';

type HeartButtonProps = {
  isLiked?: boolean;
  postId?: number;
};

const HeartButton = ({ isLiked, postId }: HeartButtonProps) => {
  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);

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
        { page: 0, sort: 'createdAt' },
      ]);
      const newPostData = prevPostData?.content.map((post) => {
        return post.id === id
          ? { ...post, myLike: true, likesCount: post.likesCount + 1 }
          : post;
      });
      const updatedData = {
        ...prevPostData,
        content: newPostData,
      };
      queryClient.setQueryData(
        ['posts', { page: 0, sort: 'createdAt' }],
        updatedData,
      );

      return { prevPostData };
    },
    // onError: (err, id, context) => {
    //   console.log(err);
    //   queryClient.setQueryData(['posts'], context?.prevPostData);
    // },
  });

  const deleteLike = useMutation({
    mutationFn: fetchDeleteLike,
    onMutate: (id) => {
      const prevPostData: Post[] | undefined = queryClient.getQueryData([
        'posts',
        { page: 0, sort: 'createdAt' },
      ]);
      const newPostData = prevPostData?.content.map((post) => {
        return post.id === id
          ? { ...post, myLike: false, likesCount: post.likesCount - 1 }
          : post;
      });
      const updatedData = {
        ...prevPostData,
        content: newPostData,
      };
      queryClient.setQueryData(
        ['posts', { page: 0, sort: 'createdAt' }],
        updatedData,
      );

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

  return member ? (
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
  ) : (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '19px',
        width: '38px',
        hegiht: '38px',
      })}
      role="presentation"
    >
      <DisabledHeart />
    </div>
  );
};

export default HeartButton;
