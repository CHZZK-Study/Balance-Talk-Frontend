import { css } from '@emotion/react';
import React, {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactElement,
} from 'react';
import { Theme } from '../../../../styles/Theme';
import { sidebarNavStyling } from './SidebarNav.style';

interface SidebarNavProps extends ComponentPropsWithoutRef<'nav'> {
  navId: number;
  selectedId: number;
  icon: ReactElement;
  text: string;
  changeSelect: (navId: number) => void;
}

const SidebarNav = ({
  navId,
  selectedId,
  icon,
  text,
  changeSelect,
}: SidebarNavProps) => {
  const handleEnterKeyPress = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      changeSelect(navId);
    }
  };

  return (
    <li
      role="tab"
      css={sidebarNavStyling(selectedId === navId)}
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

export default SidebarNav;
