import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import ImageDropZone from '../../../components/common/ImageDropZone';
import useInputs from '../../../hooks/useInputs';
import { CreatePost, CreatePostImage } from '../../../types/post';

type CreatePostFormProps = {
  setBalanceOptions: <P, K extends keyof CreatePost>(
    name: K,
    value: P,
    index: number,
  ) => void;
  index: number;
};

const inputStyles = {
  borderRadius: '5px',
  fontSize: '16px',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  border: 0,
  backgroundColor: '#EEEEEE',
  boxShadow: '0px 4px 4px gray',
};

const initialState = {
  title: '',
  description: '',
  file: {
    uploadName: '사진1',
    path: '',
    type: '',
    size: '',
  },
};

const CreatePostForm = ({ setBalanceOptions, index }: CreatePostFormProps) => {
  const { form, onChange, setEach } = useInputs<CreatePostImage>(initialState);

  const { title, description, file } = form;

  useEffect(() => {
    setBalanceOptions('balanceOptions', { title, description, file }, index);
  }, [title, description, file, index, setBalanceOptions]);

  return (
    <div css={css({ margin: '80px', marginTop: '40px' })}>
      <ImageDropZone setFile={setEach} />
      <input
        name="title"
        value={title}
        onChange={onChange}
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
        placeholder=" 선택지 제목을 입력해 주세요."
      />
      <div>
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          css={css({
            width: '450px',
            height: '100px',
            ...inputStyles,
            ':hover': {
              backgroundColor: '#BEBEBE',
            },
          })}
          placeholder=" 선택지 설명을 입력해 주세요."
        />
      </div>
    </div>
  );
};

export default CreatePostForm;
