import React, { ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { mypageTextStyling } from './ListItem.style';

interface ItemNullProps extends ComponentPropsWithRef<'div'> {}

const ItemNull = ({ children }: ItemNullProps) => {
  return (
    <div css={css({ margin: '20px' })}>
      <p css={mypageTextStyling('xSmall')}>{children}</p>
    </div>
  );
};

export default ItemNull;
