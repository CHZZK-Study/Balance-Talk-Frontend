import React from 'react';
import {
  pageBoxStyling,
  pageSelectedBoxStyling,
  paginavigationContainer,
} from './Paginavigation.style';
import LeftButton from '../../assets/svg/LeftButton';
import RightButton from '../../assets/svg/RightButton';

interface PageNavigationProps {
  pages: number[];
  selected: number;
  maxPage: number;
  onChangeNavigate: (page: number) => void;
}

const PageNavigation = ({
  pages,
  selected,
  maxPage,
  onChangeNavigate,
}: PageNavigationProps) => {
  const nextId = selected === maxPage ? selected : selected + 1;
  const prevId = selected === 1 ? selected : selected - 1;

  return (
    <div css={paginavigationContainer}>
      <button
        type="button"
        css={pageBoxStyling}
        onClick={() => {
          onChangeNavigate(prevId);
        }}
      >
        {}
        <LeftButton />
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
        <RightButton />
      </button>
    </div>
  );
};

export default PageNavigation;
