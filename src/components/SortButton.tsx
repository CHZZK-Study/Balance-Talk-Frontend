import React from 'react';
import { css } from '@emotion/react';

const SortButton = () => {
  return (
    <div
      css={css({
        fontFamily: 'SpoqaHanSansNeo-Thin',
        fontSize: '14px',
        display: 'flex',
        marginLeft: '30px',
      })}
    >
      <div
        css={css({
          fontFamily: 'SpoqaHanSansNeo-Regular',
          fontSize: '14px',
          borderRight: '1px solid #C4C4C4',
          paddingRight: '5px',
          cursor: 'pointer',
        })}
      >
        최신순
      </div>
      <div
        css={css({
          borderRight: '1px solid #C4C4C4',
          paddingLeft: '5px',
          paddingRight: '5px',
          cursor: 'pointer',
        })}
      >
        조회순
      </div>
      <div
        css={css({
          paddingLeft: '5px',
          cursor: 'pointer',
        })}
      >
        추천순
      </div>
    </div>
  );
};

export default SortButton;
