import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';

type Props = {
  onClickHandler: (e: MouseEvent<HTMLElement>) => void;
  focus: number;
};

const SortButton = ({ onClickHandler, focus }: Props) => {
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
          fontSize: '14px',
          borderRight: '1px solid #C4C4C4',
          paddingRight: '5px',
          cursor: 'pointer',
          fontFamily:
            focus === 0 ? 'SpoqaHanSansNeo-Regular' : 'SpoqaHanSansNeo-Thin',
        })}
        onClick={onClickHandler}
        role="presentation"
      >
        최신순
      </div>
      <div
        css={css({
          borderRight: '1px solid #C4C4C4',
          paddingLeft: '5px',
          paddingRight: '5px',
          cursor: 'pointer',
          fontFamily:
            focus === 1 ? 'SpoqaHanSansNeo-Regular' : 'SpoqaHanSansNeo-Thin',
        })}
        onClick={onClickHandler}
        role="presentation"
      >
        조회순
      </div>
      <div
        css={css({
          paddingLeft: '5px',
          cursor: 'pointer',
          fontFamily:
            focus === 2 ? 'SpoqaHanSansNeo-Regular' : 'SpoqaHanSansNeo-Thin',
        })}
        onClick={onClickHandler}
        role="presentation"
      >
        추천순
      </div>
    </div>
  );
};

export default SortButton;
