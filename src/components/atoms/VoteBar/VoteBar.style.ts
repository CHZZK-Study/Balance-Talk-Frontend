import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const barContainerStyle = css({
  width: '1010px',
  position: 'relative',
  marginBottom: '20px',
  height: '60px', // Ensure the container has height
});

export const barStyle = css({
  padding: '5px',
  background: color.WT,
  width: '100%',
  height: '60px',
  borderRadius: '50px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const leftBarStyle = (
  leftPercentage: number,
  rightPercentage: number,
  selectedBar: 'left' | 'right',
) =>
  css({
    height: '50px',
    width: selectedBar === 'left' ? `${leftPercentage}%` : '99%',
    background: selectedBar === 'left' ? color.RED : color.RED_G,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: color.WT,
    fontWeight: 'bold',
    fontSize: '18px',
    borderRadius: '100px',
    zIndex: selectedBar === 'left' ? 999 : 1,
    position: 'absolute',
    left: '5px',
    top: '5px',
    padding: '0 10px',
    transition: 'all 0.3s ease',
  });

export const rightBarStyle = (
  leftPercentage: number,
  rightPercentage: number,
  selectedBar: 'left' | 'right',
) =>
  css({
    height: '50px',
    width: selectedBar === 'right' ? `${rightPercentage}%` : '99%',
    background: selectedBar === 'right' ? color.BLUE : color.BLUE_G,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: color.WT,
    fontWeight: 'bold',
    fontSize: '18px',
    borderRadius: '100px',
    zIndex: selectedBar === 'right' ? 999 : 1,
    position: 'absolute',
    right: '5px',
    top: '5px',
    padding: '0 10px',
    transition: 'all 0.3s ease',
  });

export const percentageStyle = css({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '20px 13px 20px 13px',
});

export const votesContainerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
});

export const votesStyle = css({
  ...typo.Main.Medium,
  color: color.GY[1],
});
