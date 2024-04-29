export type ImageInfo = {
  imageUrl?: string;
  title: string;
  description?: string;
};

export type BalanceOption = {
  balanceOptionId: number;
  title: string;
  description: string;
  imageUrl: string | null;
};

export type Post = {
  id: number;
  title: string;
  views: number;
  commentsCount: number;
  likesCount: number;
  myBookmark: boolean;
  myLike: boolean;
  deadline: string;
  category: 'CASUAL' | 'DISCUSSION';
  postTags: { tagName: string }[];
  balanceOptions: ImageInfo[];
  createdAt: string;
  createdBy: string;
  totalVoteCount: number;
  selectedOptionId?: number;
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
  writerId: number;
  profileImageUrl: string | null;
};

export type VoteInfo = {
  optionTitle: string;
  voteCount: number;
};

export type CreatePost = {
  title: string;
  category: string;
  deadline: string;
  tags: string[];
  balanceOptions: ImageInfo[];
};

export type CreatePostImage = {
  storedImageName?: string;
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
  category: string;
  description: string;
};

export type PostWithPagenation = {
  content: Post[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
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
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};
