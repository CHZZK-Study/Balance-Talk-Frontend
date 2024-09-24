import React, { useState } from 'react';
import { CommentsPagination } from '@/types/comment';
import Pagination from '@/components/atoms/Pagination/Pagination';
import TextArea from '@/components/molecules/TextArea/TextArea';
import Toggle from '@/components/atoms/Toggle/Toggle';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import { createRangeArray } from '@/utils/array';
import CommentItem from '@/components/molecules/CommentItem/CommentItem';
import { useCreateCommentMutation } from '@/hooks/api/comment/useCreateCommentMutation';
import * as S from './CommentsSection.style';

export interface CommentsSectionProps {
  talkPickId: number;
  myOption: 'A' | 'B' | null;
  commentList?: CommentsPagination;
  selectedPage: number;
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
  voted: boolean;
}

const CommentsSection = ({
  talkPickId,
  myOption,
  commentList,
  selectedPage,
  handlePageChange,
  voted,
}: CommentsSectionProps) => {
  const pages = createRangeArray(selectedPage, commentList?.totalPages || 0);
  const [commentValue, setCommentValue] = useState<string>('');

  const { mutate: createComment } = useCreateCommentMutation(
    talkPickId,
    'comments',
  );

  const handleCommentButton = () => {
    if (!myOption) return;

    createComment({
      content: commentValue,
      option: myOption,
      parentId: talkPickId,
    });
    setCommentValue('');
  };

  return (
    <div css={S.commentsSectionContainer}>
      <Toggle count={commentList?.totalElements ?? 0} label="톡댓톡" />
      <div css={S.loggedInBackground}>
        {!voted && (
          <div css={S.loggedOutBackground}>
            <div css={S.toastModalWrapper}>
              <ToastModal bgColor="black">
                투표 후에 확인할 수 있습니다.
              </ToastModal>
            </div>
          </div>
        )}
        <TextArea
          size="large"
          value={commentValue}
          onSubmit={handleCommentButton}
          placeholder="댓글을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCommentValue(e.target.value)
          }
          label="등록"
        />
        <div css={S.commentsWrapper}>
          {commentList?.content.map((commentData) => (
            <CommentItem comment={commentData} />
          ))}
        </div>
      </div>
      <div css={S.paginationWrapper}>
        <Pagination
          pages={pages}
          selected={selectedPage}
          maxPage={commentList?.totalPages ?? 0}
          onChangeNavigate={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CommentsSection;
