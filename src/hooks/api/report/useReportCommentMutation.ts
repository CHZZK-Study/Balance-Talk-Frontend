import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCommentReport } from '@/api/report';
import { useState } from 'react';
import { Id } from '@/types/api';

export const useReportCommentMutation = (talkPickId: Id, commentId: Id) => {
  const queryClient = useQueryClient();
  const [reportCommentSuccess, setReportCommentSuccess] =
    useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (data: string) =>
      postCommentReport(talkPickId, commentId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, 'comments'],
      });
      setReportCommentSuccess(true);
    },
  });

  return {
    ...mutation,
    reportCommentSuccess,
    setReportCommentSuccess,
  };
};
