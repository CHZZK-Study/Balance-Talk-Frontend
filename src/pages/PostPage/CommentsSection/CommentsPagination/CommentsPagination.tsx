import { LeftButton, RightButton } from '@/assets';
import Button from '@/components/design/Button/Button';
import { COMMENTS_LIMIT } from '@/constants/pagination';
import React from 'react';
import { commentsPaginationWrapper } from './CommentsPagination.style';

export interface PaginationProps {
  totalCommentsCount: number;
  currentPage?: number;
}

export const Pagination = ({
  totalCommentsCount,
  currentPage,
}: PaginationProps) => {
  const pages: number = Math.ceil(totalCommentsCount / COMMENTS_LIMIT);

  return (
    <div css={commentsPaginationWrapper}>
      <button type="button">
        <LeftButton />
      </button>
      {Array.from({ length: pages }).map((_, idx) => (
        <button type="button" className="number">
          {idx + 1}
        </button>
      ))}
      <button type="button">
        <RightButton />
      </button>
    </div>
  );
};
