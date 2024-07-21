/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Menu } from '@/assets';
import {
  menuIconStlying,
  menuItemStyling,
  menuStlying,
  menuTapStyling,
} from './MenuTap.style';

export type MenuItem = {
  label?: string;
  onClick?: () => void;
};

export interface MenuTapProps {
  menuData: MenuItem[];
}

const MenuTap = ({ menuData }: MenuTapProps) => {
  const [view, setView] = useState<boolean>(false);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setView(!view);
  };

  const handleOutsideClick = () => {
    setView(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div css={menuTapStyling}>
      <Menu css={menuIconStlying} onClick={handleMenuClick} />
      {view && (
        <ul css={menuStlying}>
          {menuData.map((item, idx) => (
            <li key={idx} css={menuItemStyling} onClick={item?.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuTap;
