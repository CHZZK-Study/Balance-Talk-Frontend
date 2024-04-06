/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MyPostsContentType } from '@/types/mypage';
import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delete } from '@/assets';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/api/posts/posts';
import {
  deleteWrapper,
  hoverStyling,
  myPostContainer,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyPostsContentType;
}

const ItemMyPosts = ({ item }: MyPostsProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${item.postId}`);
  };

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['myPosts'] }),
  });

  const handleDeleteClick = () => {
    mutate(item.postId);
  };

  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>
        {item.postId}
      </span>
      <div css={myPostContainer}>
        <div css={withoutNoContainer}>
          <p
            onClick={handleClick}
            css={[mypageTextStyling('small'), hoverStyling]}
          >
            {item.postTitle}
          </p>
          <p css={mypageTextStyling('xSmall')}>{item.postCreatedAt}</p>
        </div>
        <div
          css={deleteWrapper}
          onClick={handleDeleteClick}
          role="presentation"
        >
          <Delete />
        </div>
      </div>
    </li>
  );
};

export default forwardRef(ItemMyPosts);
