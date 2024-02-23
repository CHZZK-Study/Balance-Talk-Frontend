import { css } from '@emotion/react';
import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

export type ListProps = ComponentPropsWithRef<'ul'>;

const List = (
  { children, ...attributes }: ListProps,
  ref: ForwardedRef<HTMLUListElement>,
) => {
  return (
    <ul
      css={css({
        margin: '0px 20px',
      })}
      ref={ref}
      {...attributes}
    >
      {children}
    </ul>
  );
};

export default forwardRef(List);
