import React, { SetStateAction, useState } from 'react';
import { Comment } from '@/types/comment';
import { Profile } from '@/assets';
import { getDate } from '@/utils/date';
import CommentLikeButton from '@/components/Buttons/CommentLikeButton';
import CommentReportButton from '@/components/Buttons/CommentReportButton';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import CommentEditButton from '@/components/Buttons/CommentEditButton';
import { useEditCommentForm } from '@/hooks/comment/useEditCommentForm';
import CommentDeleteButton from '@/components/Buttons/CommentDeleteButton';
import {
  btnsWrapper,
  commentHistoryWrapper,
  commentInfoWrapper,
  commentMainWrapper,
  commentWrapper,
  contentWrapper,
  createdAtWrapper,
  editDeletebtnsWrapper,
  likeBtnWrapper,
  nameWrapper,
  replyBtnWrapper,
  userCommentWrapper,
  utilityBtnsWrapper,
} from './UserComment.style';
import InputEditedComment from '../InputComment/InputEditedComment/InputEditedComment';

type UserCommentProps = Comment & {
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
  handleOpenReplies?: React.Dispatch<SetStateAction<boolean>>;
  isOpenReplies?: boolean;
  balanceOptionIds: number[];
  alignLeft?: boolean;
  selectedPageNumber?: number;
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
  isOpenReplies,
  alignLeft,
  selectedPageNumber,
  handleLoginModal,
  handleOpenReplies,
}: UserCommentProps) => {
  const createdDate = getDate(createdAt);
  const lastModifedDate = lastModifiedAt ? getDate(lastModifiedAt) : null;
  const commentDate = lastModifedDate || createdDate;
  const [isActiveEditInput, setIsActiveEditInput] = useState(false);

  // const { member } = useMemberQuery(
  //   useParseJwt(useNewSelector(selectAccessToken)).memberId,
  // );
  const { form, onChange } = useEditCommentForm(content);

  const member = { memberId: 100, nickname: '김성현' };

  const isReply = parentCommentId !== null && parentCommentId !== undefined;

  const isAlignLeft = parentCommentId
    ? alignLeft
    : selectedOptionId === balanceOptionIds[0];

  return (
    <div css={userCommentWrapper(!!isAlignLeft)}>
      <div css={commentMainWrapper(isReply, !!isAlignLeft)}>
        <div css={commentWrapper(!!isAlignLeft)}>
          {profileImageUrl ? (
            // 이미지 반영 필요
            <img src={profileImageUrl} alt="이미지" />
          ) : (
            <Profile width={40} />
          )}
          <div
            css={commentInfoWrapper(
              isActiveEditInput,
              member?.nickname === memberName,
            )}
          >
            <div css={commentHistoryWrapper(!!isAlignLeft)}>
              <div css={nameWrapper}>{memberName || '익명'}</div>
              <div css={createdAtWrapper}>
                {commentDate < 1 ? '오늘' : `${createdDate}일전`}
              </div>
              {member?.nickname === memberName && (
                <div css={editDeletebtnsWrapper(!!isAlignLeft)}>
                  <CommentEditButton handleActiveEdit={setIsActiveEditInput} />
                  <CommentDeleteButton
                    postId={postId}
                    commentId={id}
                    parentCommentId={parentCommentId}
                  />
                </div>
              )}
            </div>
            {isActiveEditInput ? (
              <InputEditedComment
                value={form.content}
                onChange={onChange}
                postId={postId}
                commentId={id}
                selectedOptionId={selectedOptionId}
                parentCommentId={parentCommentId}
                handleActiveEdit={setIsActiveEditInput}
                selectedPageNumber={selectedPageNumber}
              />
            ) : (
              <div css={contentWrapper(!!isAlignLeft)}>{content}</div>
            )}
          </div>
        </div>
        <div css={btnsWrapper(!!isAlignLeft)}>
          <div css={utilityBtnsWrapper}>
            <div css={likeBtnWrapper}>
              <CommentLikeButton
                handleModal={handleLoginModal}
                myLike={myLike}
                postId={postId}
                commentId={id}
                selectedPageNumber={selectedPageNumber}
                parentCommentId={parentCommentId}
              />
              <span>{likesCount}</span>
            </div>
            <CommentReportButton
              postId={postId}
              handleModal={handleLoginModal}
              commentId={id}
            />
          </div>
          {!parentCommentId && (
            <div css={replyBtnWrapper}>
              <button
                type="button"
                onClick={() => handleOpenReplies((prev) => !prev)}
              >
                {isOpenReplies ? '답글 접기' : '답글 확인하기'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserComment;
