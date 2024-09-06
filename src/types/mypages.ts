import {
  InfoItem,
  MyBalanceGameItem,
  MyContentItem,
  SideBarProps,
} from '@/types/organisms';
import { PaginationType } from '@/types/pagination';

export interface MyWritten extends PaginationType {
  content: MyContentItem[];
}

export interface MyVote extends PaginationType {
  content: InfoItem[];
}

export interface MyComment extends PaginationType {
  content: InfoItem[];
}

export interface MyBookmark extends PaginationType {
  content: MyContentItem[];
}
export interface GameWritten extends PaginationType {
  content: MyBalanceGameItem[];
}

export interface GameVote extends PaginationType {
  content: MyBalanceGameItem[];
}

export interface GameBookmark extends PaginationType {
  content: MyBalanceGameItem[];
}

export interface SideBar extends SideBarProps {}
