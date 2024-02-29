import React from 'react';
import { css } from '@emotion/react';

type PaginationProps = {
  count: number;
  index: number;
};

type PaginationItemProps = {
  isActive: boolean;
};

const PaginationItem = ({ isActive }: PaginationItemProps) => {
  return (
    <div
      css={css({
        margin: '3px',
        marginTop: '10px',
        backgroundColor: isActive ? '#444444' : '#EEEEEE',
        borderRadius: '50%',
        width: '14px',
        height: '14px',
      })}
    />
  );
};

const Pagination = ({ count, index }: PaginationProps) => {
  return (
    <div css={css({ display: 'flex' })}>
      {count &&
        Array.from({ length: count - 2 }, (_, i) => (
          <PaginationItem key={i} isActive={i === index} />
        ))}
    </div>
  );
};

export default Pagination;