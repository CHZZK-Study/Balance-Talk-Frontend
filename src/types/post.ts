export type ImageInfo = {
  optionImg: string;
  optionTitle: string;
  // 게시물 Description 필요
  optionDescription?: string;
};

export type BalanceOption = {
  balanceOptionId: number;
  title: string;
  description: string;
  storedFileName: string | null;
};

export type Post = {
  id: number;
  title: string;
  views: number;
  commentCount: number;
  likeCount: number;
  myBookmark: boolean;
  myLike: boolean;
  deadline: string;
  tags: string[];
  balanceOptions: ImageInfo[];
  // 게시물을 생성한 사람의 id도 필요
  creatorId?: number;
};

export type NPost = {
  id: number;
  title: string;
  deadline: string;
  views: number;
  likesCount: number;
  myLike: boolean;
  myBookmark: boolean;
  category: 'CASUAL' | 'DISCUSSION';
  balanceOptions: BalanceOption[];
  commentCount: number;
  postTags: string[];
  createdAt: string;
  createdBy: string;
};

export type VoteInfo = {
  optionTitle: string;
  voteCount: number;
};

// 선택지 투표 및 변경 시, post로 보낼 data 타입
export type SelectedVoteInfo = {
  selectedOptionId: number;
  user: boolean;
};

export type CreatePost = {
  title: string;
  postCategory: string;
  deadline: string;
  tags: string[];
  balanceOptions: CreatePostImage[];
};

export type CreatePostImage = {
  title: string;
  description: string;
  file: CreatePostImageFile;
};

export type CreatePostImageFile = {
  uploadName: string;
  path: string;
  type: string;
  size: string;
};
