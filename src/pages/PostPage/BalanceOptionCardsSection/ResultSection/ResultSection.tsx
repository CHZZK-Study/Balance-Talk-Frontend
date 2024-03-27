import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getVoteCount } from '@/api/posts/posts';
import { VoteInfo } from '@/types/post';
import { Fight } from '@/assets';
import { getPercent } from '@/utils/calculator';
import {
  resultSectionWrapper,
  blankWrapper,
  optionVoteWrapper,
  fightImageWrapper,
  optionResultWrapper,
} from './ResultSection.style';

export type ResultSectionProps = { postId: number };

const ResultSection = ({ postId }: ResultSectionProps) => {
  const { isLoading, data: voteInfos } = useQuery({
    queryKey: ['posts', 'vote', postId],
    queryFn: () => getVoteCount(postId),
    select: (data: { data: VoteInfo[] }) => data?.data,
  });
  const voteCounts = voteInfos?.map(
    (voteInfo: VoteInfo) => voteInfo.voteCount,
  ) || [0, 0];
  const votePercents = voteCounts?.map((voteCount: number) =>
    getPercent(voteCounts[0] + voteCounts[1], voteCount),
  );

  return isLoading ? (
    <div />
  ) : (
    <div css={resultSectionWrapper}>
      <div css={optionResultWrapper(votePercents[0])}>
        <div css={blankWrapper} />
        <div
          css={optionVoteWrapper('lightred')}
        >{`${getPercent(voteCounts[0] + voteCounts[1], voteCounts[0])}%(${voteCounts[0]})`}</div>
      </div>
      <div css={fightImageWrapper}>
        <Fight />
      </div>
      <div css={optionResultWrapper(100 - votePercents[1])}>
        <div
          css={optionVoteWrapper('lightblue')}
        >{`${getPercent(voteCounts[0] + voteCounts[1], voteCounts[1])}%(${voteCounts[1]})`}</div>
        <div css={blankWrapper} />
      </div>
    </div>
  );
};

export default ResultSection;
