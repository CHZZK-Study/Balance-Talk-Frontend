import React from 'react';
import { Comment } from '@/types/comment';
import { Profile, More, Report, Hearts } from '@/assets';

import { getCreatedDate } from '@/utils/date';
import { useUserInfo } from '@/hooks/common/useUserInfo';
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
  likesCount,
  createdAt,
}: UserCommentProps) => {
  const createdDate = getCreatedDate(createdAt);

  return (
    <div css={userCommentWrapper(selectedOptionId)}>
      <div css={commentMainWrapper(selectedOptionId)}>
        <div css={commentWrapper(selectedOptionId)}>
          {imgUrl ? <img src="" alt="이미지" /> : <Profile width={40} />}
          <div css={commentInfoWrapper}>
            <div css={commentHistoryWrapper(selectedOptionId)}>
              <div css={nameWrapper}>{memberName || '익명'}</div>
              <div css={createdAtWrapper}>
                {createdDate < 1 ? '오늘' : `${createdDate}일전`}
              </div>
            </div>
            <div css={contentWrapper}>{content}</div>
          </div>
        </div>
        <div css={btnsWrapper(selectedOptionId)}>
          <div css={utilityBtnsWrapper}>
            <div css={likeBtnWrapper}>
              <Hearts />
              <span css={likeCountTextWrapper}>{likesCount}</span>
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
