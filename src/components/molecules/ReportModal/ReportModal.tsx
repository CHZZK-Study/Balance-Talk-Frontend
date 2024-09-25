/* eslint-disable no-console */
import React, { useState } from 'react';
import Modal from '@/components/atoms/Modal/Modal';
import Button from '@/components/atoms/Button/Button';
import CheckBoxButton from '@/components/atoms/CheckBoxButton/CheckBoxButton';
import { reportOptions } from '@/constants/reportOption';
import * as S from './ReportModal.style';

export interface ReportModalProps {
  isOpen?: boolean;
  onConfirm?: (reason: string) => void;
  onClose?: () => void;
}

const ReportModal = ({ isOpen, onConfirm, onClose }: ReportModalProps) => {
  const [reportReason, setReportReason] = useState<string>('');
  const [otherReason, setOtherReason] = useState<string>('');
  const finalReportReason: string =
    reportReason === '기타' ? otherReason : reportReason;

  const handleReportReason = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportReason(e.target.value);
  };

  const handleOtherReportReason = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setOtherReason(e.target.value);
  };

  const handleConfirm = () => {
    if (!finalReportReason.trim()) return;
    onConfirm?.(finalReportReason);
  };

  return (
    <Modal
      action="report"
      isOpen={isOpen}
      onClose={onClose}
      hasCloseButton={false}
    >
      <div css={S.reportModalStyling}>
        <div css={S.reportTextStyling}>[신고사유 선택]</div>
        <div css={S.checkBoxWrapperStyling}>
          {reportOptions.map((option) => (
            <CheckBoxButton
              key={option.value}
              name="report"
              value={option.value}
              onChange={handleReportReason}
            >
              {option.label}
            </CheckBoxButton>
          ))}
          {reportReason === '기타' && (
            <textarea
              css={S.reportTextAreaStyling}
              placeholder="신고사유를 작성해주세요."
              onChange={handleOtherReportReason}
            />
          )}
        </div>
        <div css={S.reportBtnWrapperStyling}>
          <Button
            size="large"
            variant="primary"
            css={S.closeBtnStyling}
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            size="large"
            variant="primary"
            css={S.confirmBtnStyling}
            onClick={handleConfirm}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReportModal;
