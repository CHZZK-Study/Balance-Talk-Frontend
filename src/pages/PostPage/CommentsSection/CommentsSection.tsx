import React, { SetStateAction } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '@/api/comments/comments';
import { Comment, CommentsPagination } from '@/types/comment';
import UserComment from '@/components/common/UserComment/UserComment';
import InputNewComment from '@/components/common/InputComment/InputNewComment/InputNewComment';
import { useCreateCommentForm } from '@/hooks/comment/useCreateCommentForm';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import {
  commentCountWrapper,
  commentPaginationWrapper,
  commentsListSectionWrapper,
  commentsSectionWrapper,
  commentsWrapper,
} from './CommentsSection.style';
import { Pagination } from './CommentsPagination/CommentsPagination';

interface CommentsSectionProps {
  postId: number;
  selectedOptionId?: number;
  balanceOptionIds: number[];
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
}

const CommentsSection = ({
  postId,
  selectedOptionId,
  balanceOptionIds,
  handleLoginModal,
}: CommentsSectionProps) => {
  // const { member } = useMemberQuery(
  //   useParseJwt(useNewSelector(selectAccessToken)).memberId,
  // );
  const member = { memberId: 100, nickname: '김성현' };

  const { form, onChange, reset } = useCreateCommentForm();

  const { data: commentsPagination, isLoading } = useQuery({
    queryKey: ['posts', 'comments', postId],
    queryFn: () => getComments(postId),
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div css={commentsSectionWrapper}>
      <div css={commentCountWrapper}>
        댓글 {commentsPagination?.totalElements}개
      </div>
      {member && selectedOptionId && (
        <InputNewComment
          value={form.content}
          onChange={onChange}
          reset={reset}
          postId={postId}
          selectedOptionId={selectedOptionId}
        />
      )}
      <div css={commentsListSectionWrapper}>
        <div css={commentsWrapper}>
          {commentsPagination?.content.map((comment: Comment) => (
            <UserComment
              {...comment}
              handleLoginModal={handleLoginModal}
              balanceOptionIds={
                balanceOptionIds[0] !== null && balanceOptionIds[1] !== null
                  ? balanceOptionIds
                  : [1, 2]
              }
            />
          ))}
        </div>
        <div css={commentPaginationWrapper}>
          <Pagination
            totalCommentsCount={commentsPagination?.totalElements}
            currentPage={commentsPagination?.pageable.pageNumber + 1 || 1}
          />
        </div>
      </div>
    </div>
  );
};
export default CommentsSection;
