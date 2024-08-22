import React from 'react';
import Modal from '@/components/atoms/Modal/Modal';
import Divider from '@/components/atoms/Divider/Divider';
import * as S from './TextModal.style';

export interface TextModalProps {
  text: string;
  smallText?: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
}

const TextModal = ({
  text,
  smallText,
  isOpen,
  onConfirm,
  onClose,
}: TextModalProps) => (
  <Modal action="default" isOpen={isOpen} onClose={onClose}>
    <div css={S.textModalStyling}>
      <div css={S.modalTextWrapper}>
        <div css={S.modalTextStyling}>{text}</div>
        {smallText && <div css={S.modalSmallTextStyling}>{smallText}</div>}
      </div>
      <Divider orientation="width" length={546} />
      <div css={S.buttonWrapperStyling}>
        <button type="button" onClick={onConfirm} css={S.buttonTextStyling}>
          확인
        </button>
        <button type="button" onClick={onClose} css={S.buttonTextStyling}>
          취소
        </button>
      </div>
    </div>
  </Modal>
);

export default TextModal;
