/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import PostTitleBox from '@/components/atoms/PostTitleBox/PostTitleBox';
import OptionInputBox from '@/components/atoms/OptionInputBox/OptionInputBox';
import Divider from '@/components/atoms/Divider/Divider';
import ImageUploader from '@/components/molecules/ImageUploader/ImageUploader';
import CitationBox from '@/components/atoms/CitationBox/CitationBox';
import DraftPostButton from '@/components/atoms/DraftPostButton/DraftPostButton';
import Button from '@/components/atoms/Button/Button';
import * as S from './PostInputForm.style';

const PostInputForm = (props: any, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div css={S.formStyle}>
      <PostTitleBox />

      <div css={S.bodyStyle}>
        <div css={S.optionStyle}>
          <OptionInputBox option="A" />
          <OptionInputBox option="B" />
        </div>
        <Divider length={1080} orientation="width" />
        <div css={S.inputContainerStyle}>
          <textarea
            css={S.inputStyle}
            placeholder="다른 토커들에게 내 이야기를 공유하고 의견을 들어보세요!"
            ref={ref}
            {...props}
          />
        </div>
        <ImageUploader />
      </div>

      <div css={S.otherStyle}>
        <CitationBox />
        <DraftPostButton />
      </div>

      <div css={S.buttonStyle}>
        <Button size="large" variant="outlinePrimarySquare">
          임시저장하기
        </Button>
        <Button size="large" variant="primarySquare">
          등록하기
        </Button>
      </div>
    </div>
  );
};
export default forwardRef(PostInputForm);
