import type { ComponentPropsWithRef, ForwardedRef, KeyboardEvent } from 'react';
import React, { forwardRef } from 'react';
import { tabStyling } from './Tab.style';

export interface TabProps extends ComponentPropsWithRef<'li'> {
  tabId: number;
  selectedId: number;
  text: string;
  changeSelect: (tabId: number) => void;
}

const Tab = (
  { tabId, selectedId, text, changeSelect, ...attributes }: TabProps,
  ref?: ForwardedRef<HTMLLIElement>,
) => {
  const handleEnterKeyPress = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      changeSelect(tabId);
    }
  };

  return (
    <li
      role="tab"
      tabIndex={0}
      css={tabStyling(selectedId === tabId)}
      ref={ref}
      onClick={() => {
        changeSelect(tabId);
      }}
      onKeyDown={handleEnterKeyPress}
      {...attributes}
    >
      {text}
    </li>
  );
};

export default forwardRef(Tab);
