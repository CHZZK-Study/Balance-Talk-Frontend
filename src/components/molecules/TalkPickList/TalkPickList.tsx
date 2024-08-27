import React from 'react';
import { TalkPickListItem } from '@/types/talk-pick';
import TalkPickItem from '@/components/atoms/TalkPickItem/TalkPickItem';
import * as S from './TalkPickList.style';

export interface TalkPickListProps {
  talkPickList?: TalkPickListItem[];
}

const TalkPickList = ({ talkPickList }: TalkPickListProps) => (
  <div css={S.talkPickListContainer}>
    <div css={S.talkPickListWrapper}>
      <TalkPickItem type="header" />
      {talkPickList?.map((talkPick) => (
        <TalkPickItem
          key={talkPick.id}
          type="default"
          talkPickItem={talkPick}
        />
      ))}
    </div>
  </div>
);

export default TalkPickList;
