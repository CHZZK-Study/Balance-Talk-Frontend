export type Comment = {
  id: number;
  content: string;
  memberName: string;
  postId: number;
  selectedOptionId: number;
  parentCommentId?: number;
  likesCount: number;
  myLike: boolean;
  createdAt: string;
  lastModifiedAt: string;
  profileImageUrl: string | null;
  postTitle: string;
};

export type CreatedComment = Pick<Comment, 'content' | 'selectedOptionId'>;
export type EditedComment = {
  content: string;
  selectedOptionId: number | null;
};
export type CreatedReply = {
  content: string;
  memberId: number;
  commentId: number;
};
export type CommentsPagination = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Comment[];
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    pageSize: number;
    paged: boolean;
    pageNumber: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
};

export type ReportedComment = {
  reason: string;
  description: string;
};

// 추후 수정
export type Replies = {
  content: Comment[];
};
