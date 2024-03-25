import React, { SetStateAction, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '@/api/comments/comments';
import { Comment } from '@/types/comment';
import InputNewComment from '@/components/common/InputComment/InputNewComment/InputNewComment';
import { useCreateCommentForm } from '@/hooks/comment/useCreateCommentForm';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { COMMENTS_PER_PAGE } from '@/constants/pagination';
import {
  commentCountWrapper,
  commentPaginationWrapper,
  commentsListSectionWrapper,
  commentsSectionWrapper,
  commentsWrapper,
} from './CommentsSection.style';
import CommentsPagination from './CommentsPagination/CommentsPagination';
import CommentSection from './CommentSection/CommentSection';

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
  const [selectedPageNumber, setSelectedPageNumber] = useState<number>(0);

  const { form, onChange, reset } = useCreateCommentForm();

  const { data: commentsPagination, isLoading } = useQuery({
    queryKey: ['posts', 'comments', postId, selectedPageNumber],
    queryFn: () =>
      getComments(postId, {
        page: selectedPageNumber,
        size: COMMENTS_PER_PAGE,
        sort: [],
      }),
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
            <CommentSection
              comment={comment}
              postId={postId}
              handleLoginModal={handleLoginModal}
              balanceOptionIds={
                balanceOptionIds[0] !== null && balanceOptionIds[1] !== null
                  ? balanceOptionIds
                  : [1, 2]
              }
              selectedOptionId={selectedOptionId || null}
              selectedPageNumber={selectedPageNumber}
            />
          ))}
        </div>
        <div css={commentPaginationWrapper}>
          <CommentsPagination
            totalPages={commentsPagination?.totalPages || 0}
            selectedPage={selectedPageNumber}
            isLast={commentsPagination?.last || false}
            handleSelectedPage={setSelectedPageNumber}
          />
        </div>
      </div>
    </div>
  );
};
export default CommentsSection;
