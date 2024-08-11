import React from 'react';
import { TalkPickListItem } from '@/types/talk-pick';
import TalkPickItem from '@/components/atoms/TalkPickItem/TalkPickItem';
import * as S from './BestTalkPick.style';

export interface BestTalkPickProps {
  bestTalkPick: TalkPickListItem[];
}

const BestTalkPick = ({ bestTalkPick }: BestTalkPickProps) => (
  <div css={S.bestTalkPickContainer}>
    <div css={S.bestTalkPickText}>BEST 3</div>
    <TalkPickItem type="header" />
    {bestTalkPick.map((talkPick, idx) => (
      <TalkPickItem
        key={talkPick.id}
        type="best"
        rank={idx + 1}
        talkPickItem={talkPick}
      />
    ))}
  </div>
);

export default BestTalkPick;
