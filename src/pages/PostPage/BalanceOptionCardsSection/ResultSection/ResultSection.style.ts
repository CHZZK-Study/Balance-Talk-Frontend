import { css } from '@emotion/react';
import { Theme } from '../../../../styles/Theme';

export const resultSectionWrapper = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: 'white',
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: Theme.text.large.fontSize,
  lineHeight: Theme.text.large.lineHeight,
});

export const fightImageWrapper = css({
  padding: '0 0.2rem',
});

export const optionResultWrapper = (gridPercent: number) =>
  css({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: `${100 - gridPercent}fr ${gridPercent}fr`,
  });
export const blankWrapper = css({});

export const optionVoteWrapper = (color: string) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0.5rem 0',
    color: Theme.color.white,
    whiteSpace: 'nowrap',
    background:
      color === 'lightred' ? Theme.color.lightred : Theme.color.lightblue,
  });
