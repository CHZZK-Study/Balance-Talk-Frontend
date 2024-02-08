import React from 'react';
import { css } from '@emotion/react';

type TagButtonProps = {
  tag: string;
};
const TagButton = ({ tag }: TagButtonProps) => {
  return (
    <button
      css={css({
        backgroundColor: '#EEEEEE',
        border: 0,
        borderRadius: '15px',
        fontFamily: 'SpoqaHanSansNeo-Bold',
        fontSize: '14px',
        width: '72px',
        height: '35px',
        boxShadow: '0px 4px 4px gray',
        marginRight: '10px',
        ':hover': {
          backgroundColor: '#BEBEBE',
        },
      })}
      type="button"
    >
      # {tag}
    </button>
  );
};

export default TagButton;
