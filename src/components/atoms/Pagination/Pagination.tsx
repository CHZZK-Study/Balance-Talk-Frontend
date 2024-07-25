import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@/assets';
import {
  pageBoxStyling,
  pageSelectedBoxStyling,
  paginationContainer,
} from './Pagination.style';

interface PaginationProps {
  pages: number[];
  selected: number;
  maxPage: number;
  onChangeNavigate: (page: number) => void;
}

const Pagination = ({
  pages,
  selected,
  maxPage,
  onChangeNavigate,
}: PaginationProps) => {
  const nextId = selected === maxPage ? selected : selected + 1;
  const prevId = selected === 1 ? selected : selected - 1;

  return (
    <div css={paginationContainer}>
      <button
        type="button"
        css={pageBoxStyling}
        onClick={() => {
          onChangeNavigate(prevId);
        }}
      >
        {}
        <KeyboardArrowLeft />
      </button>
      {pages.map((page) => {
        return (
          <button
            type="button"
            css={[pageBoxStyling, selected === page && pageSelectedBoxStyling]}
            key={page}
            onClick={() => {
              onChangeNavigate(page);
            }}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        css={pageBoxStyling}
        onClick={() => {
          onChangeNavigate(nextId);
        }}
      >
        {}
        <KeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
