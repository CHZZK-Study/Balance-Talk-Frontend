/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HTTP_STATUS_CODE } from '@/constants/api';
import { postTempTalkPick } from '@/api/talk-pick';
import { NewTalkPick } from '@/types/talk-pick';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosErrorResponse } from '@/api/interceptor';
import { ERROR } from '@/constants/message';

export const useSaveTempTalkPickMutation = () => {
  const queryClient = useQueryClient();
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const navigate = useNavigate();

  const setCreateError = (message: string) => {
    setIsError(true);
    setErrorMessage(message);
  };

  const mutation = useMutation({
    mutationFn: (data: NewTalkPick) => postTempTalkPick(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['tempTalkPick'],
      });

      setSaveSuccess(true);
    },
    onError: (err: AxiosErrorResponse) => {
      if (err.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        setCreateError(ERROR.SAVE.FAIL);
      }
    },
  });

  return {
    ...mutation,
    saveSuccess,
  };
};
