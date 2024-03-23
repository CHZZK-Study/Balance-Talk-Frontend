import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';

type TagButtonProps = {
  tag: string;
  onClickHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
};
const TagButton = ({ tag, onClickHandler }: TagButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      data-tag={tag}
      css={css({
        backgroundColor: '#EEEEEE',
        border: 0,
        borderRadius: '15px',
        fontFamily: 'SpoqaHanSansNeo-Bold',
        fontSize: '14px',
        minWidth: '72px',
        height: '35px',
        boxShadow: '0px 4px 4px gray',
        marginRight: '10px',
        marginTop: '5px',
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
