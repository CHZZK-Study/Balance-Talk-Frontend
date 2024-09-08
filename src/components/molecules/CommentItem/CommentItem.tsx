import React, { useState } from 'react';
import { Comment } from '@/types/comment';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import { formatDateFromISO } from '@/utils/formatData';
import { useDeleteCommentMutation } from '@/hooks/api/comment/useDeleteCommentMutation';
import { useCreateLikeCommentMutation } from '@/hooks/api/like/useCreateLikeCommentMutation';
import { useDeleteLikeCommentMutation } from '@/hooks/api/like/useDeleteLikeCommentMutation';
import { useReportCommentMutation } from '@/hooks/api/report/useReportCommentMutation';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import LikeButton from '@/components/atoms/LikeButton/LikeButton';
import TextArea from '@/components/molecules/TextArea/TextArea';
import CommentProfile from '@/components/atoms/CommentProfile/CommentProfile';
import TextModal from '../TextModal/TextModal';
import ReportModal from '../ReportModal/ReportModal';
import * as S from './CommentItem.style';

export interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);
  const isMyComment: boolean = comment?.nickname === member?.nickname;

  const [reportModalOpen, setReportModalOpen] = useState<boolean>(false);
  const [reportTextModalOpen, setReportTextModalOpen] =
    useState<boolean>(false);
  const [deleteTextModalOpen, setDeleteTextModalOpen] =
    useState<boolean>(false);

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

  const { mutate: deleteComment } = useDeleteCommentMutation(
    comment.talkPickId,
    'comments',
  );

  const {
    mutate: reportComment,
    reportCommentSuccess,
    setReportCommentSuccess,
  } = useReportCommentMutation(comment.talkPickId, comment.id);

  const handleDeleteCommentButton = () => {
    setDeleteTextModalOpen(false);
    deleteComment(comment.id);
  };

  const myComment: MenuItem[] = [
    {
      label: '수정',
      onClick: () => {
        console.log('수정 클릭됨!!');
      },
    },
    {
      label: '삭제',
      onClick: () => {
        setDeleteTextModalOpen(true);
      },
    },
  ];

  const otherComment: MenuItem[] = [
    {
      label: '신고',
      onClick: () => {
        setReportTextModalOpen(true);
      },
    },
  ];

  const { mutate: createLikeComment } = useCreateLikeCommentMutation(
    comment.talkPickId,
    comment.id,
    'comments',
  );

  const { mutate: deleteLikeComment } = useDeleteLikeCommentMutation(
    comment.talkPickId,
    comment.id,
    'comments',
  );

  const handleLikeCommentButton = () => {
    if (comment.myLike) {
      deleteLikeComment();
    } else {
      createLikeComment();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReportCommentButton = (reason: string) => {
    reportComment(reason);
    setReportModalOpen(false);
    scrollToTop();

    setTimeout(() => {
      setReportCommentSuccess(false);
    }, 2000);
  };

  return (
    <div
      css={[
        S.MainContainer,
        showReply ? S.expandedContainer : S.compactContainer,
      ]}
    >
      {reportCommentSuccess && (
        <div css={S.toastModalStyling}>
          <ToastModal>신고가 완료되었습니다.</ToastModal>
        </div>
      )}
      <div css={S.centerStyling}>
        <TextModal
          text="작성한 댓글을 삭제하시겠습니까?"
          isOpen={deleteTextModalOpen}
          onConfirm={() => {
            handleDeleteCommentButton();
          }}
          onClose={() => setReportTextModalOpen(false)}
        />
        <TextModal
          text="해당 댓글을 신고하시겠습니까?"
          isOpen={reportTextModalOpen}
          onConfirm={() => {
            setReportTextModalOpen(false);
            setReportModalOpen(true);
          }}
          onClose={() => setReportTextModalOpen(false)}
        />
        <ReportModal
          isOpen={reportModalOpen}
          onConfirm={(reason) => handleReportCommentButton(reason)}
          onClose={() => setReportModalOpen(false)}
        />
      </div>
      <div css={[S.commentContainer, isMyComment && S.myCommentColor]}>
        <CommentProfile option={comment?.option} imgUrl={comment?.imgUrl} />
        <div css={S.commentWrapper}>
          <div css={S.commentBox}>
            <span css={S.nickname}>{comment?.nickname}</span>
            <span css={S.createdTime}>
              {formatDateFromISO(comment?.createdAt ?? '')}
            </span>
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
            <MenuTap menuData={isMyComment ? myComment : otherComment} />
          </div>
          <LikeButton
            likeCount={comment?.likesCount}
            likeState={comment?.myLike}
            onClick={handleLikeCommentButton}
          />
        </div>
      </div>
      {showReply && (
        <div css={S.replyForm}>
          <span css={S.nicknameInput}>{member?.nickname}</span>
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
