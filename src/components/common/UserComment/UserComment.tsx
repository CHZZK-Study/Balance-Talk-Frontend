import React from 'react';
import { css } from '@emotion/react';
import { Comment } from '@/types/comment';
import { Profile, More, Report, Like, Plus } from '@/assets';
import {
  commentHistoryWrapper,
  commentInfoWrapper,
  commentMainWrapper,
  commentWrapper,
  contentWrapper,
  createdAtWrapper,
  likeBtnWrapper,
  likeCountTextWrapper,
  nameWrapper,
  userCommentWrapper,
  utilityBtnsWrapper,
} from './UserComment.style';

export type UserCommentProps = Comment & {
  imgUrl?: string;
};

const UserComment = ({
  id,
  imgUrl,
  content,
  memberName,
  postId,
  selectedOptionId,
  likeCount,
  createdAt,
  lastModifiedAt,
}: UserCommentProps) => {
  const createdAtDate = '3일전';
  return (
    <div css={userCommentWrapper}>
      <div css={commentMainWrapper}>
        <div css={commentWrapper}>
          {imgUrl ? <img src="" alt="이미지" /> : <Profile width={40} />}
          <div css={commentInfoWrapper}>
            <div css={commentHistoryWrapper}>
              <div css={nameWrapper}>{memberName || '김성현'}</div>
              <div css={createdAtWrapper}>{createdAtDate}</div>
            </div>
            <div css={contentWrapper}>댓글입니다. 댓글입니다.</div>
          </div>
        </div>
        <div css={utilityBtnsWrapper}>
          <div css={likeBtnWrapper}>
            <Like />
            <span css={likeCountTextWrapper}>{123}</span>
          </div>
          <More />
          <Report />
          <Plus />
        </div>
      </div>
    </div>
  );
};

export default UserComment;
