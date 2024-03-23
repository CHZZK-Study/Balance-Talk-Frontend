import React, { SetStateAction, useState } from 'react';
import { Comment } from '@/types/comment';
import { Profile, More } from '@/assets';
import { getCreatedDate } from '@/utils/date';
import CommentLikeButton from '@/components/Buttons/CommentLikeButton';
import CommentReportButton from '@/components/Buttons/CommentReportButton';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import {
  btnsWrapper,
  commentHistoryWrapper,
  commentInfoWrapper,
  commentMainWrapper,
  commentWrapper,
  contentWrapper,
  createdAtWrapper,
  likeBtnWrapper,
  nameWrapper,
  replyBtnWrapper,
  userCommentWrapper,
  utilityBtnsWrapper,
} from './UserComment.style';

type UserCommentProps = Comment & {
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
  balanceOptionIds: number[];
};

const UserComment = ({
  id,
  content,
  memberName,
  postId,
  selectedOptionId,
  balanceOptionIds,
  parentCommentId,
  myLike,
  createdAt,
  likesCount,
  lastModifiedAt,
  profileImageUrl,
  postTitle,
  handleLoginModal,
}: UserCommentProps) => {
  const createdDate = getCreatedDate(createdAt);

  const [isOpenReplies, setIsOpenReplies] = useState<boolean>(false);
  // const { member } = useMemberQuery(
  //   useParseJwt(useNewSelector(selectAccessToken)).memberId,
  // );

  const member = { memberId: 100, nickname: '김성현' };
  const isAlignLeft = selectedOptionId === balanceOptionIds[0];
  console.log(selectedOptionId, balanceOptionIds);

  return (
    <div css={userCommentWrapper(isAlignLeft)}>
      <div css={commentMainWrapper(isAlignLeft)}>
        <div css={commentWrapper(isAlignLeft)}>
          {profileImageUrl ? (
            // 이미지 반영 필요
            <img src={profileImageUrl} alt="이미지" />
          ) : (
            <Profile width={40} />
          )}
          <div css={commentInfoWrapper}>
            <div css={commentHistoryWrapper(isAlignLeft)}>
              <div css={nameWrapper}>{memberName || '익명'}</div>
              <div css={createdAtWrapper}>
                {createdDate < 1 ? '오늘' : `${createdDate}일전`}
              </div>
              {member?.nickname === memberName && <More />}
            </div>
            <div css={contentWrapper}>{content}</div>
          </div>
        </div>
        <div css={btnsWrapper(isAlignLeft)}>
          <div css={utilityBtnsWrapper}>
            <div css={likeBtnWrapper}>
              <CommentLikeButton
                handleModal={handleLoginModal}
                myLike={myLike}
                postId={postId}
                commentId={id}
              />
              <span>{likesCount}</span>
            </div>
            <CommentReportButton
              postId={postId}
              handleModal={handleLoginModal}
              commentId={id}
            />
          </div>
          <div css={replyBtnWrapper}>
            <button
              type="button"
              onClick={() => {
                setIsOpenReplies(!isOpenReplies);
              }}
            >
              {isOpenReplies ? '답글 확인하기' : '답글 접기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
