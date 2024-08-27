import React from 'react';

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
