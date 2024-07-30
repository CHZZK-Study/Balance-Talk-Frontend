import React from 'react';
import Modal from '@/components/atoms/Modal/Modal';
import Divider from '@/components/atoms/Divider/Divider';
import {
  textModalStyling,
  modalTextStyling,
  buttonTextStyling,
  buttonWrapperStyling,
} from './TextModal.style';

export interface TextModalProps {
  text: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
}

const TextModal = ({ text, isOpen, onConfirm, onClose }: TextModalProps) => (
  <Modal action="default" isOpen={isOpen} onClose={onClose}>
    <div css={textModalStyling}>
      <div css={modalTextStyling}>{text}</div>
      <Divider orientation="width" length={522} />
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
