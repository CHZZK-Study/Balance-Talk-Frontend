import React from 'react';
import Button from '@/components/atoms/Button/Button';
import * as S from './TextArea.style';

export interface TextAreaProps {
  size: 'large' | 'medium';
  value: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

const TextArea = ({
  size,
  value,
  placeholder,
  label,
  onChange,
  onSubmit,
}: TextAreaProps) => (
  <div css={[S.textAreaContainer, S.getContainerSizeStyling(size)]}>
    <textarea
      css={[S.replyTextArea, S.getTextareaSizeStyling(size)]}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={500}
    />
    <div css={S.replyFooter}>
      <span css={S.replyCount}>{value.length}/500</span>
      <Button size="large" variant="primary" onClick={onSubmit}>
        {label}
      </Button>
    </div>
  </div>
);

export default TextArea;
