import React, { SetStateAction, useEffect, useRef } from 'react';
import Button from '@/components/design/Button/Button';
import {
  btnsWrapper,
  reportModalWrapper,
  titleWrapper,
} from './ReportModal.style';

interface ChangeVoteModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  type: '게시글' | '댓글';
}

const ReportModal = ({ handleModal, type }: ChangeVoteModalProps) => {
  const reportModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        reportModalRef.current &&
        !reportModalRef.current.contains(event.target as Node)
      ) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [reportModalRef, handleModal]);

  return (
    <div ref={reportModalRef} css={reportModalWrapper}>
      <div css={titleWrapper}>{type} 신고가 접수되었습니다.</div>
      <div css={btnsWrapper}>
        <Button variant="cancel" onClick={() => handleModal(false)}>
          닫기
        </Button>
      </div>
    </div>
  );
};

export default ReportModal;
