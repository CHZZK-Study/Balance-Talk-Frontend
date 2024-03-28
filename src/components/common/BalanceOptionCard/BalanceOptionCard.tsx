import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSelectedOptionsInLocalStorage } from '@/hooks/vote/useSelectedOptionsInLocalStorage';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { voteBalanceOption } from '@/api/votes/vote';
import { VoteInfo, BalanceOption } from '@/types/post';
import { getVoteCount } from '@/api/posts/posts';
import { Check, Winner } from '../../../assets';
import DefaultImage from '../../../../public/defaultImage.png';
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
import ChangeVoteModal from '../Modal/ChangeVoteModal/ChangeVoteModal';

export type BalanceOptionCardProps = BalanceOption & {
  postId: number;
  isVoted: boolean;
  isChecked: boolean;
  title: string;
};

const isWinner = (voteResult: VoteInfo[], balanceOptionTitle: string) => {
  const winnerTitle =
    voteResult[0].voteCount > voteResult[1].voteCount
      ? voteResult[0].optionTitle
      : voteResult[0].voteCount < voteResult[1].voteCount
        ? voteResult[1].optionTitle
        : null;
  return winnerTitle === balanceOptionTitle;
};

const BalanceOptionCard = ({
  postId,
  title,
  description,
  imageUrl,
  balanceOptionId,
  isVoted,
  isChecked,
}: BalanceOptionCardProps) => {
  const queryClient = useQueryClient();
  const [isChangeVoteModalOpen, setIsChangeVoteModalOpen] = useState(false);
  const { setSelectedOptionId } = useSelectedOptionsInLocalStorage();

  const { isLoading: isVotInfoLoading, data: voteInfos } = useQuery({
    queryKey: ['posts', 'vote', postId],
    queryFn: () => getVoteCount(postId),
    select: (data: { data: VoteInfo[] }) => data?.data,
  });

  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );

  // 회원 투표
  const { mutate: voteBalanceOptionByUserMutate } = useMutation({
    mutationFn: (data) => voteBalanceOption(postId, { ...data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    },
  });

  // 비회원 투표
  const { mutate: voteBalanceOptionByNonUserMutate } = useMutation({
    mutationFn: (data) => voteBalanceOption(postId, { ...data }),
    onSuccess: async () => {
      setSelectedOptionId(postId, balanceOptionId);
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
            if (!isVoted && !member) {
              voteBalanceOptionByNonUserMutate({
                selectedOptionId: balanceOptionId,
              });
              return;
            }
            // 비회원 선택지 변경
            if (isVoted && !member) {
              setIsChangeVoteModalOpen(true);
              return;
            }
            // 회원 선택지 투표
            if (!isVoted && member) {
              voteBalanceOptionByUserMutate({
                selectedOptionId: balanceOptionId,
              });
              return;
            }
            setIsChangeVoteModalOpen(true);
          }}
        >
          {isVoted && !isVotInfoLoading && isWinner(voteInfos, title) && (
            <div css={winnerIconWrapper}>
              <Winner />
            </div>
          )}
          <img
            css={css(balanceOptionImageWrapper)}
            src={imageUrl || DefaultImage}
            alt={title}
          />
        </button>
      </div>
      <div css={balanceOptionDescriptionWrapper}>{description}</div>
      {isChangeVoteModalOpen && (
        <ChangeVoteModal
          handleModal={setIsChangeVoteModalOpen}
          postId={postId}
          balanceOptionId={balanceOptionId}
        />
      )}
    </div>
  );
};

export default BalanceOptionCard;
