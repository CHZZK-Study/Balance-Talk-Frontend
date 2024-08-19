import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';
import { barStyling } from '@/styles/keyframes';

interface BarProps {
  selectedBar?: 'A' | 'B' | null;
  leftPercentage: number;
  rightPercentage: number;
}

export const barContainerStyle = css({
  width: '1010px',
  position: 'relative',
  marginBottom: '20px',
  height: '60px',
});

export const barStyle = css({
  padding: '5px',
  background: color.WT,
  width: '100%',
  height: '60px',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.15)',
});

export const barWrapper = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  borderRadius: '50px',
  position: 'relative',
  overflow: 'hidden',
});

export const leftBarStyle = ({ leftPercentage, selectedBar }: BarProps) =>
  css({
    height: '50px',
    width: selectedBar === 'A' ? `${leftPercentage}%` : '100%',
    background: selectedBar === 'A' ? color.RED_G : color.RED,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '100px',
    zIndex: selectedBar === 'A' ? 999 : 1,
    position: 'absolute',
    padding: '0 10px',
    animation:
      selectedBar === 'A' ? `${barStyling(leftPercentage)} 1s ease` : 'none',
  });

export const rightBarStyle = ({ rightPercentage, selectedBar }: BarProps) =>
  css({
    height: '50px',
    width: selectedBar === 'B' ? `${rightPercentage}%` : '100%',
    background: selectedBar === 'B' ? color.BLUE : color.BLUE_G,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '100px',
    zIndex: selectedBar === 'B' ? 999 : 1,
    position: 'absolute',
    right: '0px',
    padding: '0 10px',
    animation:
      selectedBar === 'B' ? `${barStyling(rightPercentage)} 1s ease` : 'none',
  });

export const percentageWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  padding: '0 20px',
  zIndex: 999,
});

export const percentageStyle = css({
  fontWeight: 'bold',
  fontSize: '18px',
  color: color.WT,
});

export const votesContainerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
});

export const votesStyle = css(typo.Main.Medium, {
  color: color.GY[1],
});

export const neutralBarStyle = css({
  width: '100%',
  height: '100%',
  backgroundColor: color.GY[2],
  borderRadius: '50px',
});
