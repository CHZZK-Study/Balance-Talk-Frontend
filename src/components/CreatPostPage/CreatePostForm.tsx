import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import ImageDropZone from './ImageDropZone';
import useInputs from '../../hooks/common/useInputs';
import { CreatePost, CreatePostImage } from '../../types/post';
import { PLACE_HOLDER } from '../../constants/message';

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
  storedImageName: '',
};

const CreatePostForm = ({ setBalanceOptions, index }: CreatePostFormProps) => {
  const { form, onChange, setEach } = useInputs<CreatePostImage>(initialState);

  const { title, description, storedImageName } = form;

  useEffect(() => {
    setBalanceOptions(
      'balanceOptions',
      { title, description, storedImageName },
      index,
    );
  }, [title, description, storedImageName, index, setBalanceOptions]);

  return (
    <div css={css({ margin: '80px', marginTop: '40px' })}>
      <ImageDropZone setFile={setEach} />
      <input
        required
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
          '&:required:invalid': {
            border: '1px solid red',
          },
        })}
        placeholder={PLACE_HOLDER.POST.CHOICE_TITLE}
      />
      {!title && (
        <div
          css={css({
            color: 'red',
            marginTop: '7px',
          })}
        >
          선택지 제목을 입력해 주세요.
        </div>
      )}
      <div>
        <textarea
          required
          name="description"
          value={description}
          onChange={onChange}
          css={css({
            marginTop: '13px',
            width: '450px',
            height: '100px',
            ...inputStyles,
            ':hover': {
              backgroundColor: '#BEBEBE',
            },
            resize: 'none',
            '&:required:invalid': {
              border: '1px solid red',
            },
          })}
          placeholder={PLACE_HOLDER.POST.CHOICE_DESCRIPTION}
        />
      </div>
    </div>
  );
};

export default CreatePostForm;
