import React, { ForwardedRef, forwardRef, useRef } from 'react';
import Divider from '@/components/atoms/Divider/Divider';
import * as S from './TitleDescriptionField.style';

export interface TitleDescriptionFieldProps {
  title: string;
  description?: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleDescriptionField = (
  {
    title,
    description,
    onTitleChange,
    onDescriptionChange,
  }: TitleDescriptionFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const descriptionRef = useRef<HTMLInputElement>(null);

  return (
    <div css={S.fieldWrapStyle}>
      <div css={S.titleWrapStyle}>
        <div css={S.titleStyle}>
          제목 <span css={S.titleDesStyle}>(필수)</span>
        </div>
        <input
          type="text"
          placeholder="ex) 연인 상황별 더 킹받는 순간은?"
          value={title}
          onChange={onTitleChange}
          ref={ref}
          css={S.textStyle}
        />
      </div>

      <Divider orientation="width" length={1132} />

      <div css={S.descriptionWrapStyle}>
        <div css={S.descriptionStyle}>상황설명</div>
        <input
          type="text"
          placeholder="ex) 나와 내 연인, 내 친구의 조합으로 밥집에 갔다. 반찬으로 깻잎이 등장!"
          value={description}
          onChange={onDescriptionChange}
          css={S.textStyle}
          ref={descriptionRef}
        />
      </div>
    </div>
  );
};

export default forwardRef(TitleDescriptionField);
