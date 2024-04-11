import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

import { Member } from '@/types/member';

// export const ProfileModalWrapper = css({
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   display: 'flex',
//   padding: '50px 40px',
//   flexDirection: 'column',
//   alignItems: 'center',
//   gap: '40px',
//   borderRadius: '10px',
//   background: 'white',
//   zIndex: '300',
//   transform: `translate(-50%, -50%)`,
// });

export const profileModalWrapper = css({
  position: 'fixed',
  width: '400px',
  height: '520px',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  background: 'white',
  zIndex: '300',
  gap: '15px',
  padding: '1rem',
  transform: `translate(-50%, -50%)`,
  boxShadow: '0px 4px 4px 0px gray',
});

export const blankWrapper = css({
  width: '1px',
  height: '40px',
});

export const profileBackgroundWrapper = css({
  position: 'absolute',
  zIndex: '-1',
  top: '16px',
  width: '95%',
  height: '150px',
  borderRadius: '16px',
  background: '#222831',
});

export const btnsWrapper = css({
  display: 'flex',
  padding: '0.5rem',
  gap: '20px',

  '& button': { width: '7.5rem' },
  justifyContent: 'space-betwee',
});

export const profileInfoWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const profileTextWrapper = css({
  fontWeight: '600',
  fontSize: Theme.text.medium.fontSize,
});

export const profileRankWrapper = (level: Required<Member>['level']) => {
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
