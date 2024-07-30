import React, { useRef, useState } from 'react';
import type { ComponentPropsWithRef } from 'react';
import DotButton from '@/components/atoms/DotButton/DotButton';
import LikeButton from '@/components/atoms/LikeButton/LikeButton';
import Button from '@/components/atoms/Button/Button';
import * as S from './Comment.style';

export interface CommentProps extends ComponentPropsWithRef<'div'> {
  imgUrl: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  nickname: string;
  createdTime: string;
  comment: string;
  likeCount: number;
  initialLikeState?: 'default' | 'press';
}

const Comment = ({
  imgUrl: ImgComponent,
  nickname,
  createdTime,
  comment,
  likeCount,
  initialLikeState = 'default',
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

  return (
    <div css={S.MainContainer} {...attributes}>
      <div css={S.commentContainer}>
        {typeof ImgComponent === 'string' ? (
          <img src={ImgComponent} alt={nickname} css={S.profileImage} />
        ) : (
          <ImgComponent css={S.profileImage} />
        )}
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
            <DotButton />
          </div>
          <LikeButton
            ref={likeButtonRef}
            initialCount={likeCount}
            initialState={initialLikeState}
          />
        </div>
      </div>
      {showReply && (
        <div css={S.replyForm}>
          <div css={S.textareaContainer}>
            <textarea
              css={S.replyTextarea}
              value={replyText}
              onChange={handleReplyChange}
              placeholder="댓글을 어쩌고저쩌고 입력하세요"
              maxLength={500}
            />
            <div css={S.replyFooter}>
              <span css={S.replyCount}>{replyText.length}/500</span>
              <Button size="large" variant="primary">
                답글달기
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
