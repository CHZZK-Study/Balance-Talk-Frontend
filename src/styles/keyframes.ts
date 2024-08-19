import { keyframes } from '@emotion/react';
import color from './color';

export const pulsate = keyframes({
  '0%': {
    transform: 'scale(1.1)',
  },
  '50%': {
    transform: 'scale(.9)',
  },
  '100%': {
    transform: 'scale(1.1)',
  },
});

export const loadingStyle = keyframes({
  '0%': {
    backgroundColor: color.Neutral[800],
  },
  '50%': {
    backgroundColor: color.Neutral[700],
  },
  '100%': {
    backgroundColor: color.Neutral[800],
  },
});

export const rotate = keyframes({
  '100%': {
    transform: 'rotate(-360deg)',
  },
});

export const barStyling = (varPercentage: number) => keyframes`
  0% {
    width: 0%;
  }
  60% {
    width: 100%;
  }
  100% {
    width: ${varPercentage}%;
  }
`;
