import React from 'react';
import Modal from '@/components/atoms/Modal/Modal';
import Divider from '@/components/atoms/Divider/Divider';
import {
  textModalStyling,
  modalTextStyling,
  modalSmallTextStyling,
  buttonTextStyling,
  buttonWrapperStyling,
  modalTextWrapper,
} from './TextModal.style';

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
    <div css={textModalStyling}>
      <div css={modalTextWrapper}>
        <div css={modalTextStyling}>{text}</div>
        {smallText && <div css={modalSmallTextStyling}>{smallText}</div>}
      </div>
      <Divider orientation="width" length={546} />
      <div css={buttonWrapperStyling}>
        <button type="button" onClick={onConfirm} css={buttonTextStyling}>
          확인
        </button>
        <button type="button" onClick={onClose} css={buttonTextStyling}>
          취소
        </button>
      </div>
    </div>
  </Modal>
);

export default TextModal;
