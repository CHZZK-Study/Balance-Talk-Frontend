import { css } from '@emotion/react';
import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import { Theme } from '../../../styles/theme';

export type TopTabProps = ComponentPropsWithRef<'ul'>;

const TopTab = (
  { children, ...attributes }: TopTabProps,
  ref: ForwardedRef<HTMLUListElement>,
) => (
  <ul
    tabIndex={-1}
    css={css({
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
      borderBottom: `2px solid ${Theme.color.gray200}`,
    })}
    ref={ref}
    {...attributes}
  >
    {children}
  </ul>
);

export default forwardRef(TopTab);
