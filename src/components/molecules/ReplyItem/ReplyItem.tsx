import React, { useEffect, useRef, useState } from 'react';
import { Comment } from '@/types/comment';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import { formatDateFromISO } from '@/utils/formatData';
import { useEditCommentMutation } from '@/hooks/api/comment/useEditCommentMutation';
import { useDeleteCommentMutation } from '@/hooks/api/comment/useDeleteCommentMutation';
import { useCreateLikeCommentMutation } from '@/hooks/api/like/useCreateLikeCommentMutation';
import { useDeleteLikeCommentMutation } from '@/hooks/api/like/useDeleteLikeCommentMutation';
import { useReportCommentMutation } from '@/hooks/api/report/useReportCommentMutation';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import LikeButton from '@/components/atoms/LikeButton/LikeButton';
import TextArea from '../TextArea/TextArea';
import TextModal from '../TextModal/TextModal';
import ReportModal from '../ReportModal/ReportModal';
import * as S from './ReplyItem.style';

export interface ReplyItemProps {
  reply: Comment;
}

const ReplyItem = ({ reply }: ReplyItemProps) => {
  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);
  const isMyReply: boolean = reply?.nickname === member?.nickname;
  const replyRef = useRef<HTMLDivElement>(null);

  const [reportModalOpen, setReportModalOpen] = useState<boolean>(false);
  const [reportTextModalOpen, setReportTextModalOpen] =
    useState<boolean>(false);
  const [deleteTextModalOpen, setDeleteTextModalOpen] =
    useState<boolean>(false);

  const [editReplyClicked, setEditReplyClicked] = useState<boolean>(false);
  const [editReplyText, setEditReplyText] = useState<string>(reply.content);

  const { mutate: editReply } = useEditCommentMutation(
    reply.talkPickId,
    reply.id,
    setEditReplyClicked,
  );

  const handleEditReplySubmit = () => {
    if (reply.content === editReplyText) return;
    editReply({ content: editReplyText });
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (replyRef.current && !replyRef.current.contains(e.target as Node)) {
        setEditReplyClicked(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [replyRef]);

  const { mutate: deleteComment } = useDeleteCommentMutation(
    reply.talkPickId,
    reply.id,
  );

  const {
    mutate: reportComment,
    reportCommentSuccess,
    setReportCommentSuccess,
  } = useReportCommentMutation(reply.talkPickId, reply.id);

  const handleDeleteCommentButton = () => {
    setDeleteTextModalOpen(false);
    deleteComment();
  };

  const myReply: MenuItem[] = [
    {
      label: '수정',
      onClick: () => {
        setEditReplyClicked(true);
      },
    },
    {
      label: '삭제',
      onClick: () => {
        setDeleteTextModalOpen(true);
      },
    },
  ];

  const otherReply: MenuItem[] = [
    {
      label: '신고',
      onClick: () => {
        setReportTextModalOpen(true);
      },
    },
  ];

  const { mutate: createLikeComment } = useCreateLikeCommentMutation(
    reply.talkPickId,
    reply.id,
    'comments',
  );

  const { mutate: deleteLikeComment } = useDeleteLikeCommentMutation(
    reply.talkPickId,
    reply.id,
    'comments',
  );

  const handleLikeCommentButton = () => {
    if (reply.myLike) {
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
    <div css={S.MainContainer}>
      {reportCommentSuccess && (
        <div css={S.toastModalStyling}>
          <ToastModal>신고가 완료되었습니다.</ToastModal>
        </div>
      )}
      <div css={S.centerStyling}>
        <TextModal
          text="작성한 답글을 삭제하시겠습니까?"
          isOpen={deleteTextModalOpen}
          onConfirm={() => {
            handleDeleteCommentButton();
          }}
          onClose={() => setReportTextModalOpen(false)}
        />
        <TextModal
          text="해당 답글을 신고하시겠습니까?"
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
      <div ref={replyRef} css={[S.ReplyContainer, isMyReply && S.myReplyColor]}>
        <div css={S.ReplyWrapper}>
          <div css={S.ReplyTopWrapper}>
            <div>
              <span css={S.nickname}>{reply?.nickname}</span>
              <span css={S.createdTime}>
                {formatDateFromISO(reply?.createdAt ?? '')}
              </span>
              {reply.edited && <span css={S.editedText}>수정됨</span>}
            </div>
            {!editReplyClicked && (
              <MenuTap menuData={isMyReply ? myReply : otherReply} />
            )}
          </div>
          {editReplyClicked ? (
            <TextArea
              size="medium"
              value={editReplyText}
              label="답글 수정"
              isEdited={reply.content !== editReplyText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setEditReplyText(e.target.value);
              }}
              onSubmit={handleEditReplySubmit}
            />
          ) : (
            <>
              <div css={S.ReplyTextWrapper}>{reply?.content}</div>
              <div css={S.ReplyBottomWrapper}>
                <LikeButton
                  likeCount={reply?.likesCount}
                  likeState={reply?.myLike}
                  onClick={handleLikeCommentButton}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReplyItem;
