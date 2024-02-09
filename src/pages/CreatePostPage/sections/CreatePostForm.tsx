import React from 'react';
import { css } from '@emotion/react';
import ImageDropZone from '../../../components/ImageDropZone';

const inputStyles = {
  borderRadius: '5px',
  fontSize: '20px',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  border: 0,
  backgroundColor: '#EEEEEE',
  boxShadow: '0px 4px 4px gray',
};

const CreatePostForm = () => {
  return (
    <div css={css({ margin: '80px' })}>
      <ImageDropZone />
      <input
        css={css({
          width: '450px',
          height: '40px',
          ...inputStyles,
          ':hover': {
            backgroundColor: '#BEBEBE',
          },
          marginTop: '20px',
          marginBottom: '20px',
        })}
        placeholder="선택지 제목을 입력해 주세요."
      />
      <div>
        <textarea
          css={css({
            width: '450px',
            height: '100px',
            ...inputStyles,
            ':hover': {
              backgroundColor: '#BEBEBE',
            },
          })}
          placeholder="선택지 설명을 입력해 주세요."
        />
      </div>
    </div>
  );
};

export default CreatePostForm;
