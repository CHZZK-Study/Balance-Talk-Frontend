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

export interface InfoBoxProps {
  title: string;
  prefix: string;
  commentContent: string;
  commentCount: number;
  bookmarks: number;
}

export interface MyContentBoxProps {
  title: string;
  commentCount: number;
  bookmarks: number;
  showBookmark?: boolean;
  bookmarkState?: boolean;
}
