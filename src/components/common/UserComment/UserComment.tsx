import React, { SetStateAction, useState } from 'react';
import { Comment } from '@/types/comment';
import { getDate } from '@/utils/date';
import CommentLikeButton from '@/components/Buttons/CommentLikeButton';
import CommentReportButton from '@/components/Buttons/CommentReportButton';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
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
  creatorImageWrapper,
  nameWrapper,
  replyBtnWrapper,
  userCommentWrapper,
  utilityBtnsWrapper,
} from './UserComment.style';
import InputEditedComment from '../InputComment/InputEditedComment/InputEditedComment';
import ProfileImage from '../Profile/ProfileImage/ProfileImage';
import defaultProfile from '../../../assets/images/defaultProfile.png';
import ReportModal from '../Modal/ReportModal/ReportModal';
import DeleteCommentModal from '../Modal/DeleteCommentModal/DeleteCommentModal';
import ProfileModal from '../Modal/ProfileModal/ProfileModal';

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
  replyCount,
  writerId,
  handleLoginModal,
  handleOpenReplies,
}: UserCommentProps) => {
  const createdDate = getDate(createdAt);
  const lastModifedDate = lastModifiedAt ? getDate(lastModifiedAt) : null;
  const commentDate = lastModifedDate || createdDate;
  const [isActiveEditInput, setIsActiveEditInput] = useState(false);
  const [isReportModalOpoen, setIsReportModalOpen] = useState(false);
  const [isDeleteModalOpoen, setIsDeleteModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [reportErrorType, setIsReportErrorType] = useState<
    'FORBIDDEN' | 'CONFLICT' | null
  >(null);

  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  const { form, onChange } = useEditCommentForm(content);
  const isReply = parentCommentId !== null && parentCommentId !== undefined;

  const isAlignLeft = parentCommentId
    ? alignLeft
    : selectedOptionId === balanceOptionIds[0];

  return (
    <div css={userCommentWrapper(!!isAlignLeft)}>
      <div css={commentMainWrapper(isReply, !!isAlignLeft)}>
        <div css={commentWrapper(!!isAlignLeft)}>
          <div
            css={creatorImageWrapper}
            onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
          >
            <ProfileImage
              src={profileImageUrl || defaultProfile}
              size="small"
            />
          </div>

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
                  <CommentDeleteButton handleModal={setIsDeleteModalOpen} />
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
              handleLoginModal={handleLoginModal}
              commentId={id}
              handleReportModal={setIsReportModalOpen}
              handleReportErrorType={setIsReportErrorType}
            />
          </div>
          {!parentCommentId && (
            <div css={replyBtnWrapper}>
              <button
                type="button"
                onClick={() => handleOpenReplies((prev) => !prev)}
              >
                {isOpenReplies
                  ? '답글 접기'
                  : replyCount
                    ? `${replyCount}개의 답글`
                    : member
                      ? '답글 작성하기'
                      : ''}
              </button>
            </div>
          )}
        </div>
      </div>
      {isReportModalOpoen && (
        <ReportModal
          handleModal={setIsReportModalOpen}
          type="댓글"
          errorType={reportErrorType}
          handleReportErrorType={setIsReportErrorType}
        />
      )}
      {isDeleteModalOpoen && (
        <DeleteCommentModal
          postId={postId}
          commentId={id}
          parentCommentId={parentCommentId}
          handleModal={setIsDeleteModalOpen}
        />
      )}

      {isProfileModalOpen && (
        <ProfileModal
          creatorId={writerId}
          handleModal={setIsProfileModalOpen}
        />
      )}
    </div>
  );
};

export default UserComment;
