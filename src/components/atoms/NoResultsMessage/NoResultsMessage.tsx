import React from 'react';
import { NO_RESULT_MESSAGE } from '@/constants/message';
import * as S from './NoResultsMessage.style';

interface NoResultsMessageProps {
  searchChoice?: 'default' | 'balanceGame' | 'talkPick';
  keyword: string;
}

export const NoResultsMessage = ({
  searchChoice = 'default',
  keyword,
}: NoResultsMessageProps) => {
  const titlePrefix = {
    default: NO_RESULT_MESSAGE.TITLE_PREFIX.DEFAULT,
    balanceGame: NO_RESULT_MESSAGE.TITLE_PREFIX.BALANCE_GAME,
    talkPick: NO_RESULT_MESSAGE.TITLE_PREFIX.TALK_PICK,
  };

  return (
    <div css={S.messageContainerStyle}>
      <div>
        <span css={S.topMessageStyle}>
          {titlePrefix[searchChoice]}
          <span css={S.keywordStyle}>&lsquo;{keyword}&lsquo;</span>
          {NO_RESULT_MESSAGE.TITLE_SUFFIX}
        </span>
      </div>
      <div css={S.detailMessageStyle}>
        <ul css={S.ulStyle}>
          <li>{NO_RESULT_MESSAGE.BODY1}</li>
          <li>{NO_RESULT_MESSAGE.BODY2}</li>
        </ul>
      </div>
    </div>
  );
};
