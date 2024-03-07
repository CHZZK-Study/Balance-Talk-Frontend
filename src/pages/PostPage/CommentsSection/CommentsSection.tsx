import { css } from '@emotion/react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CommentsByOption from './CommentsByOption/CommentsByOption';
import { getComments } from '../../../api/comments/comments';
import { Comment } from '../../../types/comment';

interface CommectsSectionProps {
  postId: number;
  balanceOptionTitles: string[];
}

const CommentsSection = ({
  postId,
  balanceOptionTitles,
}: CommectsSectionProps) => {
  const { data: comments, isLoading } = useQuery({
    queryKey: ['post', postId, 'comments'],
    queryFn: () => getComments(postId),
    select: (data) => {
      const commentsData: Comment[] = data?.data;
      const balanceOptionIds = [
        ...new Set(
          commentsData.map((comment: Comment) => comment?.balanceOptionId),
        ),
      ].sort((a, b) => a - b);
      return [
        commentsData.filter(
          (comment: Comment) => comment.balanceOptionId === balanceOptionIds[0],
        ),
        commentsData.filter(
          (comment: Comment) => comment.balanceOptionId === balanceOptionIds[1],
        ),
      ];
    },
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <div
        css={css({
          marginTop: '1rem',
          marginBottom: '3rem',
          fontFamily: 'SpoqaHanSansNeo-regular',
          fontSize: '1.5rem',
        })}
      >
        댓글
        {comments[0]?.length + comments[1]?.length}개
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <CommentsByOption
          comments={[...comments[0]]}
          balnceOptionTitle={balanceOptionTitles[0]}
          isLeftOption
        />
        <CommentsByOption
          comments={[...comments[1]]}
          balnceOptionTitle={balanceOptionTitles[1]}
          isLeftOption={false}
        />
      </div>
    </div>
  );
};
export default CommentsSection;
