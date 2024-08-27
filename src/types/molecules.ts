import React from 'react';

export interface SideBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  postsCount: number;
  bookmarkedPostsCount: number;
}

export interface OptionSelectorProps {
  options: string[];
  selectedOption?: string;
  onSelect: (option: string) => void;
}
