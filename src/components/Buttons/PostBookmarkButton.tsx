import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Star } from '@/assets';
import { fetchAddBookmark, fetchDeleteBookmark } from '@/api/posts';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { pulsate } from '../../styles/keyframes';
import { NPost } from '../../types/post';

type PostBookmarkButtonProps = {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  myBookmark: boolean;
  postId: number;
};

const PostBookmarkButton = ({
  handleModal,
  myBookmark,
  postId,
}: PostBookmarkButtonProps) => {
  const queryClient = useQueryClient();
  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 500);
  };

  const addBookmark = useMutation({
    mutationFn: fetchAddBookmark,
    onMutate: () => {
      const prevPost: NPost | undefined = queryClient.getQueryData([
        'posts',
        postId,
      ]);

      queryClient.setQueryData(['posts', postId], {
        ...prevPost,
        myBookmark: true,
      });

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['posts', postId], context?.prevPost);
    },
  });

  const deleteBookmark = useMutation({
    mutationFn: fetchDeleteBookmark,
    onMutate: () => {
      const prevPost: NPost | undefined = queryClient.getQueryData([
        'posts',
        postId,
      ]);

      queryClient.setQueryData(['posts', postId], {
        ...prevPost,
        myBookmark: false,
      });

      return { prevPost };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(['posts', postId], context?.prevPost);
    },
  });

  const handlePostBookmark = () => {
    if (!member) {
      handleModal(true);
      return;
    }
    animationTrigger();
    if (postId !== undefined) {
      if (myBookmark) {
        deleteBookmark.mutate(postId);
      } else {
        addBookmark.mutate(postId);
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
        ':hover': { backgroundColor: 'yellow' },
        transition: 'background-color 0.2s',
      })}
      onClick={handlePostBookmark}
      role="presentation"
    >
      <Star
        css={css({
          fill: `${myBookmark ? '#FFD369' : 'none'}`,
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default PostBookmarkButton;
