import React from 'react';
import { Check } from '@/assets';
import { TodayTalkPick } from '@/types/talk-pick';
import {
  bannerBtnStyling,
  bannerChipStyling,
  talkPickStyling,
  talkPickTextStyling,
} from './TodayTalkPickBanner.style';

const TodayTalkPickBanner = ({
  id,
  title,
  optionA,
  optionB,
}: TodayTalkPick) => (
  <div key={id} css={talkPickStyling}>
    <div css={bannerChipStyling}>
      <Check />
      오늘의 톡 픽
    </div>
    <div css={talkPickTextStyling}>
      {title} <br />
      {optionA} VS {optionB}
    </div>
    <div css={bannerBtnStyling}>투표결과 보러 가기</div>
  </div>
);

export default TodayTalkPickBanner;
