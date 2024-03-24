export type ImageInfo = {
  storedFileName?: string;
  title: string;
  // 게시물 Description 필요
  description?: string;
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
  postTags: { tagName: string }[];
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
  myVote?: boolean;
  category: 'CASUAL' | 'DISCUSSION';
  balanceOptions: BalanceOption[];
  postTags: { tagName: string }[];
  totalVotesCount: number;
  createdAt: string;
  createdBy: string;
  selectedOptionId?: number | null;
  profileImageUrl: string | null;
};

export type VoteInfo = {
  optionTitle: string;
  voteCount: number;
};

export type CreatePost = {
  memberId: number;
  title: string;
  category: string;
  deadline: string;
  tags: string[];
  balanceOptions: ImageInfo[];
};

export type CreatePostImage = {
  storedFileName?: string;
  title: string;
  description?: string;
};

export type CreatePostImageFile = {
  uploadName: string;
  path: string;
  type: string;
  size: string;
};

export type UploadedImage = {
  id: number;
  originalName: string;
  storedName: string;
  path: string;
  type: string;
  size: number;
};

export type ReportedPost = {
  reason: string;
  description: string;
};
