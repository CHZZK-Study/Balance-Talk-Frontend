import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

type TagButtonProps = {
  tag: string;
};
const TagButton = ({ tag }: TagButtonProps) => {
  const navigate = useNavigate();

  const onTagClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/searchResult?tagName=${tag}`);
  };

  return (
    <button
      onClick={onTagClick}
      data-tag={tag}
      css={css({
        backgroundColor: '#EEEEEE',
        border: 0,
        borderRadius: '15px',
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
