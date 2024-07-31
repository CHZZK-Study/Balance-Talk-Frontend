import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';
import talkPickBanner from '@/assets/images/talk-pick-banner.png';

export const talkPickStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '500px',
  paddingTop: '69px',
  paddingBottom: '110px',
  backgroundImage: `url(${talkPickBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
});

export const bannerChipStyling = css(typo.Main.SemiBold, {
  display: 'flex',
  width: '142px',
  height: '38px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '24px',
  backgroundColor: color.WT,
  color: color.BK,
});

export const bannerBtnStyling = css(typo.Main.Medium, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '320px',
  height: '64px',
  borderRadius: '10px',
  backgroundColor: color.MAIN,
  color: color.WT,
});

export const talkPickTextStyling = css(typo.Title, {
  textAlign: 'center',
  marginTop: '40px',
  marginBottom: '70px',
  color: color.WT,
});
