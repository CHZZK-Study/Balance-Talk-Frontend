/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { ModalClose } from '@/assets';
import { PRIVACY_POLICY } from '@/constants/message';
import {
  modalStyling,
  modalHeaderStyling,
  modalCloseStyling,
  modalContentStyling,
} from './PrivacyModal.style';

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [modalRef]);

  return (
    <div>
      {isOpen && (
        <div ref={modalRef} css={modalStyling}>
          <div css={modalHeaderStyling}>
            개인정보처리방침
            <ModalClose css={modalCloseStyling} onClick={onClose} />
          </div>
          <div css={modalContentStyling}>{PRIVACY_POLICY}</div>
        </div>
      )}
    </div>
  );
};

export default PrivacyModal;
