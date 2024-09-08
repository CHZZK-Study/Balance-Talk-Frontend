import React, { useRef, useState } from 'react';
import { Comment } from '@/types/comment';
import LikeButton from '@/components/atoms/LikeButton/LikeButton';
import TextArea from '@/components/molecules/TextArea/TextArea';
import CommentProfile from '@/components/atoms/CommentProfile/CommentProfile';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import * as S from './CommentItem.style';

// export interface Comment {
//   id: number;
//   talkPickId: number;
//   talkPickTitle: string;
//   nickname: string;
//   content: string;
//   option: string;
//   likesCount: number;
//   myLike: boolean;
//   parentId: number;
//   replyCount: number;
//   reportedCount: number;
//   createdAt: string;
//   lastModifiedAt: string;
//   blind: boolean;
//   best: boolean;
// }

export interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
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
    <div
      css={[
        S.MainContainer,
        showReply ? S.expandedContainer : S.compactContainer,
      ]}
    >
      <div css={S.commentContainer}>
        <CommentProfile option={comment?.option} imgUrl={comment?.imgUrl} />
        <div css={S.commentWrapper}>
          <div css={S.commentBox}>
            <span css={S.nickname}>{comment?.nickname}</span>
            <span css={S.createdTime}>{comment?.createdAt}</span>
          </div>
          <p css={S.commentText}>{comment?.content}</p>
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
            likeCount={comment?.likesCount}
            likeState={comment?.myLike}
          />
        </div>
      </div>
      {showReply && (
        <div css={S.replyForm}>
          <span css={S.nicknameInput}>사용자 닉네임</span>
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

export default CommentItem;
