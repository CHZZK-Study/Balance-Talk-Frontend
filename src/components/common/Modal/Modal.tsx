/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, ReactNode } from 'react';
import { ModalClose } from '@/assets';
import {
  modalStyling,
  getModalPadding,
  modalCloseStyling,
} from './Modal.style';

export interface ModalProps {
  action?: 'default' | 'share';
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Modal = ({
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
        <div ref={modalRef} css={[modalStyling, getModalPadding(action)]}>
          <ModalClose css={modalCloseStyling} onClick={onClose} />
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
