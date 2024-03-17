import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const commentsPaginationWrapper = css({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  '& button': {
    height: '38px',
    border: `1px solid ${Theme.color.gray300}`,
    padding: '6px 12px 6px 12px',
  },
  '.number': {
    textDecorationLine: 'underline',
  },
});
