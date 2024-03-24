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
export type EditedComment = Pick<Comment, 'content' | 'selectedOptionId'>;
export type CreatedReply = Pick<Comment, 'content'>;
export type CommentsPagination = {
  content: Comment[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};

export type ReportedComment = {
  reason: string;
  description: string;
};
