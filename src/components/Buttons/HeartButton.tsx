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
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);
      console.log(queryKeys);
      queryKeys.forEach((queryKey) => {
        console.log(queryKey);
        if (queryKey[0] === 'posts' && queryKey[1] !== 'vote') {
          console.log(queryKey);
          const prevPostData: Post[] | undefined =
            queryClient.getQueryData(queryKey);

          console.log('prevPost', prevPostData);
          console.log('length', Object.keys(prevPostData).length);
          if (Object.keys(prevPostData).length > 3) {
            const newPostData = prevPostData?.content.map((post) => {
              return post.id === id
                ? { ...post, myLike: true, likesCount: post.likesCount + 1 }
                : post;
            });
            console.log(id);
            const updatedData = {
              ...prevPostData,
              content: newPostData,
            };
            console.log('updated', updatedData);
            queryClient.setQueryData(queryKey, updatedData);
          } else {
            const realUpdatedData = prevPostData?.pages.map((page) => {
              console.log('page', page);
              const postContent = page.content.map((post) => {
                return post.id === id
                  ? { ...post, myLike: true, likesCount: post.likesCount + 1 }
                  : post;
              });
              console.log(postContent);
              const updatedData = {
                ...page,
                content: postContent,
              };
              return updatedData;
            });

            const updatedData = {
              ...prevPostData,
              pages: realUpdatedData,
            };
            queryClient.setQueryData(queryKey, updatedData);
          }
          return { prevPostData };
        }
      });
    },
    onError: (err, id, context) => {
      console.log(err);
      queryClient.setQueryData(['posts'], context?.prevPostData);
    },
  });

  const deleteLike = useMutation({
    mutationFn: fetchDeleteLike,
    onMutate: (id) => {
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'posts' && queryKey[1] !== 'vote') {
          const prevPostData: Post[] | undefined =
            queryClient.getQueryData(queryKey);
          console.log('length', Object.keys(prevPostData).length);

          if (Object.keys(prevPostData).length > 3) {
            console.log(prevPostData);
            const newPostData = prevPostData?.content.map((post) => {
              return post.id === id
                ? { ...post, myLike: false, likesCount: post.likesCount - 1 }
                : post;
            });
            console.log(id);
            const updatedData = {
              ...prevPostData,
              content: newPostData,
            };
            console.log('updated', updatedData);
            queryClient.setQueryData(queryKey, updatedData);
          } else {
            const realUpdatedData = prevPostData?.pages.map((page) => {
              console.log('page', page);
              const postContent = page.content.map((post) => {
                return post.id === id
                  ? { ...post, myLike: false, likesCount: post.likesCount - 1 }
                  : post;
              });
              console.log(postContent);
              const updatedData = {
                ...page,
                content: postContent,
              };
              return updatedData;
            });

            const updatedData = {
              ...prevPostData,
              pages: realUpdatedData,
            };
            queryClient.setQueryData(queryKey, updatedData);
          }
          return { prevPostData };
        }
      });
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
