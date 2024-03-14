import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '@/api/comments/comments';
import { Comment } from '@/types/comment';
import UserComment from '@/components/common/UserComment/UserComment';
import CommentsByOption from './CommentsByOption/CommentsByOption';
import {
  CommentsListSection,
  CommentsSectionWrapper,
  InputButtonWrapper,
  InputSectionWrapper,
  InputWrapper,
  commentCountWrapper,
  commentPaginationWrapper,
} from './CommentsSection.style';

interface CommectsSectionProps {
  postId: number;
}

const CommentsSection = ({ postId }: CommectsSectionProps) => {
  const { data: comments, isLoading } = useQuery({
    queryKey: ['post', postId, 'comments'],
    queryFn: () => getComments(postId),
  });
  const commentCount: number = 124;
  console.log(comments);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div css={CommentsSectionWrapper}>
      <div css={commentCountWrapper}>댓글 {commentCount}개</div>
      <div css={InputSectionWrapper}>
        <input type="text" placeholder="댓글을 입력해주세요" />
        <button css={InputButtonWrapper} type="submit">
          등록
        </button>
      </div>
      <div css={CommentsListSection}>
        <ul>
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
        </ul>
        <div css={commentPaginationWrapper}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
};
export default CommentsSection;
