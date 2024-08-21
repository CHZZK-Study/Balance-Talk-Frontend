import React, { useState } from 'react';
import type { ForwardedRef } from 'react';
import PostTitleBox from '@/components/atoms/PostTitleBox/PostTitleBox';
import OptionInputBox from '@/components/atoms/OptionInputBox/OptionInputBox';
import Divider from '@/components/atoms/Divider/Divider';
import ImageUploader from '@/components/molecules/ImageUploader/ImageUploader';
import CitationBox from '@/components/atoms/CitationBox/CitationBox';
import DraftPostButton from '@/components/atoms/DraftPostButton/DraftPostButton';
import Button from '@/components/atoms/Button/Button';
import { useFileUploadMutation } from '@/hooks/api/file/useFileUploadMutation';
import * as S from './PostInputForm.style';

interface FormData {
  title: string;
  optionA: string;
  optionB: string;
  content: string;
  sourceUrl: string;
  storedNames: string[];
}

interface PostInputFormProps {
  onSubmit: (data: FormData) => void;
}

const PostInputForm = (
  { onSubmit }: PostInputFormProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  const [title, setTitle] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [content, setContent] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const { mutate: uploadFiles } = useFileUploadMutation();

  const handleFormSubmit = (type: 'TALK_PICK' | 'TEMP_TALK_PICK') => {
    const imageFormData = new FormData();
    imageFiles.forEach((file) => imageFormData.append('file', file));

    uploadFiles(
      { formData: imageFormData, params: { type } },
      {
        onSuccess: (response) => {
          const { storedNames } = response;

          const postData = {
            title,
            optionA,
            optionB,
            content,
            sourceUrl,
            storedNames,
          };
          onSubmit(postData);
        },
      },
    );
  };

  return (
    <div css={S.formStyle}>
      <PostTitleBox
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />

      <div css={S.bodyStyle}>
        <div css={S.optionStyle}>
          <OptionInputBox
            option="A"
            value={optionA}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOptionA(e.target.value)
            }
          />
          <OptionInputBox
            option="B"
            value={optionB}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOptionB(e.target.value)
            }
          />
        </div>
        <Divider length={1080} orientation="width" />
        <div css={S.inputContainerStyle}>
          <textarea
            css={S.inputStyle}
            placeholder="다른 토커들에게 내 이야기를 공유하고 의견을 들어보세요!"
            ref={ref}
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
          />
        </div>
        <ImageUploader imageFiles={imageFiles} setImageFiles={setImageFiles} />
      </div>

      <div css={S.otherStyle}>
        <CitationBox setSourceUrl={setSourceUrl} />
        <DraftPostButton />
      </div>

      <div css={S.buttonStyle}>
        <Button
          size="large"
          variant="outlinePrimarySquare"
          onClick={() => handleFormSubmit('TEMP_TALK_PICK')}
        >
          임시저장하기
        </Button>
        <Button
          size="large"
          variant="primarySquare"
          onClick={() => handleFormSubmit('TALK_PICK')}
        >
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default PostInputForm;
