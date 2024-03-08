import React from 'react';
import { css } from '@emotion/react';

const VoteButton = () => {
  return (
    <button
      type="button"
      css={css({
        backgroundColor: '#FFD369',
        border: 0,
        borderRadius: '10px',
        fontFamily: 'SpoqaHanSansNeo-Bold',
        fontSize: '20px',
        width: '165px',
        height: '45px',
        boxShadow: '0px 4px 4px gray',
        ':hover': {
          backgroundColor: '#E5BD5E',
        },
      })}
    >
      투표하기
    </button>
  );
};

export default VoteButton;
