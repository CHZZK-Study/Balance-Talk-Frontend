import {
  InfoItem,
  MyBalanceGameItem,
  MyContentItem,
  SideBarProps,
} from '@/types/organisms';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

export interface Bookmark extends MyContentItem {}

export interface MyTalk extends MyContentItem {}

export interface MyVote extends InfoItem {}

export interface MyComment extends InfoItem {}

export interface MyGame extends MyBalanceGameItem {}

export interface GameBookmark extends MyBalanceGameItem {}

export interface GameVote extends MyBalanceGameItem {}

export interface SideBar extends SideBarProps {}

// export type TopicQueryKeys =
//   | '내가 저장한'
//   | '내가 투표한'
//   | '내가 댓글단'
//   | '내가 작성한';
//
// export type BalanceGameQueryKeys = '내가 저장한' | '내가 투표한' | '내가 만든';

export interface MyInfiniteData<T> {
  pages: Array<{
    content: T[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first: boolean;
    empty: boolean;
  }>;
  pageParams: number[];
}
