import React, { SetStateAction } from 'react';

import { LeftButton, RightButton } from '@/assets';
import {
  pageBoxWrapper,
  pageSelectedBoxWrapper,
  paginationWrapper,
} from './CommentsPagination.style';

interface CommentsPaginationProps {
  totalPages: number;
  selectedPage: number;
  isLast: boolean;
  handleSelectedPage: React.Dispatch<SetStateAction<number>>;
}

const CommentsPagination = ({
  totalPages,
  isLast,
  selectedPage,
  handleSelectedPage,
}: CommentsPaginationProps) => {
  return (
    <div css={paginationWrapper}>
      <button
        type="button"
        css={pageBoxWrapper}
        onClick={() => {
          if (selectedPage === 0) return;
          handleSelectedPage(selectedPage - 1);
        }}
      >
        <LeftButton />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i).map((page: number) => {
        return (
          <button
            type="button"
            css={[
              pageBoxWrapper,
              selectedPage === page && pageSelectedBoxWrapper,
            ]}
            key={page}
            onClick={() => handleSelectedPage(page)}
          >
            {page + 1}
          </button>
        );
      })}
      <button
        type="button"
        css={pageBoxWrapper}
        onClick={() => {
          if (isLast) return;
          handleSelectedPage(selectedPage + 1);
        }}
      >
        <RightButton />
      </button>
    </div>
  );
};

export default CommentsPagination;
