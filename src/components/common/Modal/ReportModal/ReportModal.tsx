import React, { SetStateAction, useEffect, useRef } from 'react';
import Button from '@/components/design/Button/Button';
import {
  btnsWrapper,
  reportModalWrapper,
  titleWrapper,
} from './ReportModal.style';

interface ReportModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  handleReportErrorType: React.Dispatch<
    SetStateAction<'CONFLICT' | 'FORBIDDEN' | null>
  >;
  type: '게시글' | '댓글';
  errorType?: 'CONFLICT' | 'FORBIDDEN' | null;
}

const ReportModal = ({
  handleModal,
  handleReportErrorType,
  type,
  errorType,
}: ReportModalProps) => {
  const reportModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        reportModalRef.current &&
        !reportModalRef.current.contains(event.target as Node)
      ) {
        handleReportErrorType(null);
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [reportModalRef, handleModal, handleReportErrorType]);

  return (
    <div ref={reportModalRef} css={reportModalWrapper}>
      <div css={titleWrapper}>
        {errorType === null
          ? `${type} 신고가 접수되었습니다.`
          : errorType === 'CONFLICT'
            ? `이미 신고한 ${type}입니다.`
            : `본인 ${type}을 신고할 수 없습니다.`}
      </div>
      <div css={btnsWrapper}>
        <Button
          variant="cancel"
          onClick={() => {
            handleReportErrorType(null);
            handleModal(false);
          }}
        >
          닫기
        </Button>
      </div>
    </div>
  );
};

export default ReportModal;
