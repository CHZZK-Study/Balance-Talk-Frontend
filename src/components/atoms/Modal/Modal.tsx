/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, ReactNode } from 'react';
import { getModalSize, modalStyling } from './Modal.style';

export interface ModalProps {
  action?: 'default' | 'share' | 'report' | 'profile';
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
        <div ref={modalRef} css={[modalStyling, getModalSize(action)]}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
