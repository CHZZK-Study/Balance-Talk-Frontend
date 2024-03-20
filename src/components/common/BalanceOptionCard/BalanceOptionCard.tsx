import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeBalanceOption, voteBalanceOption } from '@/api/votes/vote';
import { useUserInfo } from '@/hooks/common/useUserInfo';
import { useSelectedOptionsInLocalStorage } from '@/hooks/vote/useSelectedOptionsInLocalStorage';
import { BalanceOption, ImageInfo } from '../../../types/post';
import coffee from '../../../../public/coffee.jpg';
import juice from '../../../../public/juice.jpg';

import {
  balanceOptionCardWrapper,
  balanceOptionTitleWrapper,
  balanceOptionImageWrapper,
  balanceOptionDescriptionWrapper,
  balanceOptionWrapper,
  backgroundWrapper,
  innerButtonWrapper,
  winnerIconWrapper,
} from './BalanceOptionCard.style';
import { Check, NoImage } from '../../../assets';

export type BalanceOptionCardProps = BalanceOption & {
  postId: number;
  isVoted: boolean;
  isChecked: boolean;
};

const BalanceOptionCard = ({
  postId,
  title,
  description,
  storedFileName,
  balanceOptionId,
  isVoted,
  isChecked,
}: BalanceOptionCardProps) => {
  const queryClient = useQueryClient();
  const { isLoggedIn, userInfo } = useUserInfo();
  const { setSelectedOptionId } = useSelectedOptionsInLocalStorage();

  const { mutate: voteBalanceOptionByNonUserMutate } = useMutation({
    mutationFn: (data) => voteBalanceOption(postId, { ...data }),
    onSuccess: async () => {
      setSelectedOptionId(postId, balanceOptionId);
      await queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    },
  });

  const { mutate: changeBalanceOptionByNonUserMutate } = useMutation({
    mutationFn: (data) => changeBalanceOption(postId, { ...data }),
    onSuccess: async () => {
      setSelectedOptionId(postId, balanceOptionId);
      await queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    },
  });

  const { mutate: voteBalanceOptionByUserMutate } = useMutation({
    mutationFn: (data) => voteBalanceOption(postId, { ...data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    },
  });

  const { mutate: changeBalanceOptionByUserMutate } = useMutation({
    mutationFn: (data) => voteBalanceOption(postId, { ...data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    },
  });

  return (
    <div css={balanceOptionCardWrapper}>
      <div css={css(balanceOptionTitleWrapper)}>{title}</div>
      <div css={css(balanceOptionWrapper)}>
        {isChecked && (
          <div css={css(backgroundWrapper)}>
            <Check />
          </div>
        )}
        <button
          css={innerButtonWrapper}
          type="button"
          onClick={() => {
            if (isChecked) return;
            // 비회원 선택지 투표
            if (!isVoted && !isLoggedIn) {
              voteBalanceOptionByNonUserMutate({
                selectedOptionId: balanceOptionId,
                isUser: false,
              });
              return;
            }
            // 회원 선택지 투표
            if (!isVoted && isLoggedIn) {
              voteBalanceOptionByUserMutate({
                selectedOptionId: balanceOptionId,
                isUser: true,
              });
              return;
            }
            // 비회원 선택지 변경
            if (isVoted && !isLoggedIn) {
              changeBalanceOptionByNonUserMutate({
                selectedOptionId: balanceOptionId,
                isUser: false,
              });
              return;
            }
            // 회원 선택지 변경
            changeBalanceOptionByUserMutate({
              selectedOptionId: balanceOptionId,
              isUser: true,
            });
          }}
        >
          <div css={winnerIconWrapper} />
          <img
            css={css(balanceOptionImageWrapper)}
            src={storedFileName === 'coffee.jpg' ? coffee : juice}
            alt="optionImg"
          />
        </button>
      </div>

      <div css={balanceOptionDescriptionWrapper}>{description}</div>
    </div>
  );
};

export default BalanceOptionCard;
