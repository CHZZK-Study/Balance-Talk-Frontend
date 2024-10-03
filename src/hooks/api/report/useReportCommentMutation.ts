import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCommentReport } from '@/api/report';
import { useState } from 'react';
import { Id } from '@/types/api';
import { AxiosErrorResponse } from '@/api/interceptor';
import { HTTP_STATUS_CODE } from '@/constants/api';
import { SUCCESS, ERROR } from '@/constants/message';

export const useReportCommentMutation = (talkPickId: Id, commentId: Id) => {
  const queryClient = useQueryClient();
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [reportModalText, setReportModalText] = useState<string>('');

  const mutation = useMutation({
    mutationFn: (data: string) =>
      postCommentReport(talkPickId, commentId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, 'comments'],
      });
      setReportModal(true);
      setReportModalText(SUCCESS.COMMENT.REPORT);
    },
    onError: (err: AxiosErrorResponse) => {
      if (err.status === HTTP_STATUS_CODE.CONFLICT) {
        setReportModal(true);
        setReportModalText(ERROR.COMMENT.REPORT_AGAIN);
      }
    },
  });

  return {
    ...mutation,
    reportModalText,
    reportModal,
    setReportModal,
  };
};
