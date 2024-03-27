import {
  CommentsPagination,
  CreatedComment,
  CreatedReply,
  EditedComment,
  Replies,
} from '@/types/comment';
import { END_POINT } from '../../constants/api';
import { axiosInstance } from '../interceptor';

export const getComments = async (
  postId: number,
  pageable: { page: number; size?: number; sort: string[] },
): Promise<CommentsPagination> => {
  const response = await axiosInstance.get(END_POINT.COMMENTS(postId), {
    params: { ...pageable },
  });
  return response.data as CommentsPagination;
};

export const createComment = async (postId: number, data: CreatedComment) => {
  const response = await axiosInstance.post(END_POINT.CREATE_COMMENT(postId), {
    ...data,
  });
  return response;
};

export const fetchAddLikeComment = async (
  postId: number,
  commentId: number,
) => {
  const response = await axiosInstance.post(
    END_POINT.ADD_LIKE_COMMENT(postId, commentId),
  );
  return response;
};

export const fetchDeleteLikeComment = async (
  postId: number,
  commentId: number,
) => {
  const response = await axiosInstance.delete(
    END_POINT.DELETE_LIKE_COMMENT(postId, commentId),
  );
  return response;
};

export const fetchReportComment = async (postId: number, commetId: number) => {
  const response = await axiosInstance.post(
    END_POINT.REPORT_COMMENT(postId, commetId),
    {
      reason: '신고합니다.',
      description: '신고 내용',
    },
  );
  return response;
};

export const editComment = async (
  postId: number,
  commentId: number,
  data: EditedComment,
) => {
  const response = await axiosInstance.put(
    END_POINT.EDIT_COMMENT(postId, commentId),
    { ...data },
  );
  return response;
};

export const deleteComment = async (postId: number, commentId: number) => {
  const response = await axiosInstance.delete(
    END_POINT.DELETE_COMMENT(postId, commentId),
  );
  return response;
};

export const getReplies = async (
  postId: number,
  commentId: number,
): Promise<Replies> => {
  const response = await axiosInstance.get(
    END_POINT.COMMENT_REPLILES(postId, commentId),
  );
  return response.data as Replies;
};

export const createReply = async (
  postId: number,
  commentId: number,
  data: CreatedReply,
) => {
  const response = await axiosInstance.post(
    END_POINT.CREATE_REPLY(postId, commentId),
    {
      ...data,
    },
  );
  return response;
};
