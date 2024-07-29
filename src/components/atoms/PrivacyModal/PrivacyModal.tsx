/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, ReactNode } from 'react';
import { ModalClose } from '@/assets';
import {
  modalStyling,
  modalHeaderStyling,
  modalCloseStyling,
  modalContentStyling,
} from './PrivacyModal.style';

export interface ModalProps {
  action?: 'default' | 'share';
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const PrivacyModal = ({
  isOpen,
  onClose,
  action = 'default',
  children,
}: ModalProps) => {
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
          <div css={modalContentStyling}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default PrivacyModal;
