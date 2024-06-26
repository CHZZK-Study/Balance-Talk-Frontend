import { Member } from '@/types/member';
import { css } from '@emotion/react';
import { Theme } from '../../../styles/theme';

export const profileContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const profileInfoContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const profileText = css({
  fontWeight: '600',
  fontSize: Theme.text.medium.fontSize,
});

export const profileRankStyling = (level: Required<Member>['level']) => {
  const style = {
    0: css({
      '& path': {
        fill: Theme.color.bronze,
      },
    }),
    1: css({
      '& path': {
        fill: Theme.color.silver,
      },
    }),
    2: css({
      '& path': {
        fill: Theme.color.gold,
      },
    }),
  };

  return style[level];
};
