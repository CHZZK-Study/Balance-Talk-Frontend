import {
  InfoItem,
  MyBalanceGameItem,
  MyContentItem,
  SideBarProps,
} from '@/types/organisms';

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
export interface MyWritten {
  content: MyContentItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface MyVote {
  content: InfoItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface MyComment {
  content: InfoItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface MyBookmark {
  content: MyContentItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
export interface GameWritten {
  content: MyBalanceGameItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface GameVote {
  content: MyBalanceGameItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface GameBookmark {
  content: MyBalanceGameItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface SideBar extends SideBarProps {}

// export type TopicQueryKeys =
//   | '내가 저장한'
//   | '내가 투표한'
//   | '내가 댓글단'
//   | '내가 작성한';
//
// export type BalanceGameQueryKeys = '내가 저장한' | '내가 투표한' | '내가 만든';

// export interface MyInfiniteData<T> {
//   pages: Array<{
//     content: T[];
//     pageable: {
//       pageNumber: number;
//       pageSize: number;
//       offset: number;
//       paged: boolean;
//       unpaged: boolean;
//     };
//     totalPages: number;
//     totalElements: number;
//     last: boolean;
//     size: number;
//     number: number;
//     sort: {
//       empty: boolean;
//       sorted: boolean;
//       unsorted: boolean;
//     };
//     first: boolean;
//     empty: boolean;
//   }>;
//   pageParams: number[];
// }
