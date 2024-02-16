import { css } from '@emotion/react';
import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../../../styles/Theme';

interface SidebarNavProps extends ComponentPropsWithoutRef<'nav'> {
  url: string;
  icon: ReactElement;
}

const SidebarNav = ({ url, icon, children }: SidebarNavProps) => {
  return (
    <Link to={url}>
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          margin: '40px 0px',
          gap: '10px',
          '&:hover': {
            '& p': {
              color: Theme.color.colorHunt_black,
              fontWeight: '600',
            },
            '& svg': {
              fill: Theme.color.colorHunt_black,
            },
          },
        })}
      >
        {icon}
        <p
          css={css({
            fontSize: Theme.text.small.fontSize,
            color: Theme.color.gray400,
          })}
        >
          {children}
        </p>
      </div>
    </Link>
  );
};

export default SidebarNav;
