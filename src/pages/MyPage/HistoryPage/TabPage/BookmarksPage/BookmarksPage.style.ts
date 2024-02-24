import { css } from '@emotion/react';
import { Theme } from '../../../../../styles/Theme';

export const bookmarksBtnContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  margin: '0px 20px',
  padding: '10px 0px',
  borderBottom: `1px solid ${Theme.color.gray200}`,
});
