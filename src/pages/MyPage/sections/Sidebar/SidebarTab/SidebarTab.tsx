import { css } from '@emotion/react';
import React, {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactElement,
} from 'react';
import { Theme } from '../../../../../styles/theme';
import { sidebarTabStyling } from './SidebarTab.style';

interface SidebarTabProps extends ComponentPropsWithoutRef<'li'> {
  navId: number;
  selectedId: number;
  icon: ReactElement;
  text: string;
  changeSelect: (navId: number) => void;
}

const SidebarTab = ({
  navId,
  selectedId,
  icon,
  text,
  changeSelect,
}: SidebarTabProps) => {
  const handleEnterKeyPress = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      changeSelect(navId);
    }
  };

  return (
    <li
      role="tab"
      css={sidebarTabStyling(selectedId === navId)}
      onClick={() => {
        changeSelect(navId);
      }}
      onKeyDown={handleEnterKeyPress}
    >
      {icon}
      <p
        css={css({
          fontSize: Theme.text.small.fontSize,
          color: Theme.color.gray400,
        })}
      >
        {text}
      </p>
    </li>
  );
};

export default SidebarTab;
