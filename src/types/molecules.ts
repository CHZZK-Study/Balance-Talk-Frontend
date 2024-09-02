import React, { ComponentPropsWithRef } from 'react';
import { BookmarkProps } from '@/types/atoms';

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
  bookmarked?: BookmarkProps['bookmarked'];
}

export interface ContentsButtonProps extends ComponentPropsWithRef<'div'> {
  optionAImg: string;
  optionBImg: string;
  title: string;
  mainTag: string;
  subTag: string;
  bookmarked?: BookmarkProps['bookmarked'];
  showBookmark?: boolean;
  size?: 'large' | 'small';
}
