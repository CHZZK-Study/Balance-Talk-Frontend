import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '@/api/comments/comments';
import { Comment } from '@/types/comment';
import UserComment from '@/components/common/UserComment/UserComment';
import {
  commentCountWrapper,
  commentPaginationWrapper,
  commentsListSectionWrapper,
  commentsSectionWrapper,
  commentsWrapper,
  inputButtonWrapper,
  inputSectionWrapper,
} from './CommentsSection.style';
import { CommentsPagination } from './CommentsPagination/CommentsPagination';

interface CommectsSectionProps {
  postId: number;
}

const CommentsSection = ({ postId }: CommectsSectionProps) => {
  const totalCommentsCount = 40;
  const { data: comments, isLoading } = useQuery({
    queryKey: ['post', postId, 'comments'],
    queryFn: () => getComments(postId),
    select: (data: { data: Comment }) => data?.data,
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div css={commentsSectionWrapper}>
      <div css={commentCountWrapper}>댓글 {totalCommentsCount}개</div>
      <div css={inputSectionWrapper}>
        <input type="text" placeholder="댓글을 입력해주세요" />
        <button css={inputButtonWrapper} type="submit">
          등록
        </button>
      </div>
      <div css={commentsListSectionWrapper}>
        <div css={commentsWrapper}>
          {comments &&
            comments.map((comment: Comment) => <UserComment {...comment} />)}
        </div>
        <div css={commentPaginationWrapper}>
          <CommentsPagination
            totalCommentsCount={totalCommentsCount}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};
export default CommentsSection;
