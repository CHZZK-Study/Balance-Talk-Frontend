import { keyframes } from '@emotion/react';

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
