import React, { useRef, useState } from 'react';
import type { ComponentPropsWithRef } from 'react';
import LikeButton from '@/components/atoms/LikeButton/LikeButton';
import TextArea from '@/components/molecules/TextArea/TextArea';
import CommentProfile from '@/components/atoms/CommentProfile/CommentProfile';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import * as S from './Comment.style';

export interface CommentProps extends ComponentPropsWithRef<'div'> {
  imgUrl: string;
  nickname: string;
  createdTime: string;
  comment: string;
  likeCount: number;
  initialLikeState?: boolean;
  stance: 'pros' | 'cons';
}

const Comment = ({
  imgUrl,
  nickname,
  createdTime,
  comment,
  likeCount,
  initialLikeState = false,
  stance,
  ...attributes
}: CommentProps) => {
  const likeButtonRef = useRef<HTMLButtonElement>(null);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplyToggle = () => {
    setShowReply(!showReply);
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    console.log('작성한 답글:', replyText);
  };

  const menuData: MenuItem[] = [
    {
      label: '수정',
      onClick: () => {
        console.log('수정 클릭됨!!');
      },
    },
    {
      label: '삭제',
      onClick: () => {
        console.log('삭제 클릭됨!!');
      },
    },
  ];

  return (
    <div css={S.MainContainer} {...attributes}>
      <div css={S.commentContainer}>
        <CommentProfile stance={stance} imgUrl={imgUrl} />
        <div css={S.commentWrapper}>
          <div css={S.commentBox}>
            <span css={S.nickname}>{nickname}</span>
            <span css={S.createdTime}>{createdTime}</span>
          </div>
          <p css={S.commentText}>{comment}</p>
        </div>
        <div css={S.sideWrapper}>
          <div css={S.sideBox}>
            <button
              type="button"
              css={S.replyButton}
              onClick={handleReplyToggle}
            >
              답글
            </button>
            <MenuTap menuData={menuData} />
          </div>
          <LikeButton
            ref={likeButtonRef}
            likeCount={likeCount}
            likeState={initialLikeState}
          />
        </div>
      </div>
      {showReply && (
        <div css={S.replyForm}>
          <TextArea
            size="medium"
            value={replyText}
            onChange={handleReplyChange}
            onSubmit={handleReplySubmit}
            placeholder="댓글을 입력하세요"
            label="답글달기"
          />
        </div>
      )}
    </div>
  );
};

export default Comment;
