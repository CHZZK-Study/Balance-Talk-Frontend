import React from 'react';
import { css } from '@emotion/react';
import { Comment } from '@/types/comment';
import { Profile, More, Report, Like, Plus } from '@/assets';
import {
  btnsWrapper,
  commentHistoryWrapper,
  commentInfoWrapper,
  commentMainWrapper,
  commentWrapper,
  contentWrapper,
  createdAtWrapper,
  likeBtnWrapper,
  likeCountTextWrapper,
  nameWrapper,
  replyBtnWrapper,
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
    <div css={userCommentWrapper(selectedOptionId)}>
      <div css={commentMainWrapper(selectedOptionId)}>
        <div css={commentWrapper(selectedOptionId)}>
          {imgUrl ? <img src="" alt="이미지" /> : <Profile width={40} />}
          <div css={commentInfoWrapper}>
            <div css={commentHistoryWrapper(selectedOptionId)}>
              <div css={nameWrapper}>{memberName || '익명'}</div>
              <div css={createdAtWrapper}>{createdAtDate}</div>
            </div>
            <div css={contentWrapper}>{content}</div>
          </div>
        </div>
        <div css={btnsWrapper(selectedOptionId)}>
          <div css={utilityBtnsWrapper}>
            <div css={likeBtnWrapper}>
              <Like />
              <span css={likeCountTextWrapper}>{123}</span>
            </div>
            <More />
            <Report />
          </div>
          <div css={replyBtnWrapper}>
            <button type="button" onClick={() => {}}>
              답글
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
