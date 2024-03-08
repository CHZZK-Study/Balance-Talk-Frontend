import React from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const CreatePostButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/post/create')}
      css={css({
        position: 'relative',
        marginBottom: '10px',
        backgroundColor: '#FFD369',
        left: '70vw',
        border: 0,
        borderRadius: '10px',
        fontFamily: 'SpoqaHanSansNeo-Medium',
        fontSize: '16px',
        width: '100px',
        height: '40px',
        boxShadow: '0px 4px 4px gray',
        ':hover': {
          backgroundColor: '#E5BD5E',
        },
      })}
    >
      글쓰기
    </button>
  );
};

export default CreatePostButton;
