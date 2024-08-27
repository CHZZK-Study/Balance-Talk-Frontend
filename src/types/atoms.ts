import React, { ComponentPropsWithRef } from 'react';

export interface ProfileProps {
  interaction: 'normal';
  imgUrl?: string;
  size?: 'small' | 'large';
}

export interface ProfilePropsWithImage {
  interaction: 'settings';
  imgUrl?: string;
  size?: 'small' | 'large';
}

export type ProfileIconProps = ProfileProps | ProfilePropsWithImage;

export interface ProfileInfoProps
  extends React.ComponentPropsWithoutRef<'div'> {
  count: number;
  label: string;
}

export interface ProfileLabelProps {
  nickname: string;
}

export type SelectGroupItem = {
  label: string;
  value: string;
};

export interface SelectGroupProps {
  items: SelectGroupItem[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
}

export interface InfoLabelProps extends ComponentPropsWithRef<'div'> {
  label: string;
  count: number;
}

export interface BookmarkProps extends ComponentPropsWithRef<'button'> {
  bookmarkState?: boolean;
}
