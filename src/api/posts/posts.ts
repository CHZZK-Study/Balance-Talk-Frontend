import {
  CreatePost,
  Post,
  UploadedImage,
  VoteInfo,
  NPost,
} from '../../types/post';
import { END_POINT } from '../../constants/api';
import { axiosInstance } from '../interceptor';

// const URL = process.env.API_URL;
export const fetchPostsData = async (
  sort: string = 'createdAt',
  page: number = 0,
): Promise<Post[]> => {
  // const response = await fetch(`${URL}/posts?member-id=1`);
  // const result = (await response.json()) as Post[];
  // return result;
  const response = await axiosInstance.get(
    `/posts?page=${page}&sort=${sort},desc`,
  );
  return response.data as Post[];
};

export const fetchVoteCount = async (postId: number): Promise<VoteInfo[]> => {
  // const response = await fetch(`${URL}/post/${postId}/vote`);
  // const result = (await response.json()) as VoteInfo[];
  // return result;
  const response = await axiosInstance.get(`/post/${postId}/vote`);
  return response.data as VoteInfo[];
};

export const fetchPost = async (postForm: CreatePost) => {
  // const response = await fetch(`${URL}/posts`, {
  //   method: 'POST',
  //   credentials: 'include',
  //   body: JSON.stringify(postForm),
  // });

  // return response.status;

  const response = await axiosInstance.post('/posts', postForm);
  return response.status;
};

export const fetchPostById = async (postId: number): Promise<Post> => {
  // const response = await fetch(`${URL}/posts/${postId}`);
  // const result = (await response.json()) as Post;
  // return result;

  const response = await axiosInstance.get(`/posts/${postId}`);
  return response.data as Post;
};

export const fetchAddLike = async (postId: number) => {
  // const response = await fetch(`${URL}/posts/${postId}/likes`, {
  //   method: 'POST',
  //   credentials: 'include',
  // });

  // return response.body;
  const response = await axiosInstance.post(`/posts/${postId}/likes`);
  return response;
};

export const fetchDeleteLike = async (postId: number) => {
  // const response = await fetch(`${URL}/posts/${postId}/likes`, {
  //   method: 'DELETE',
  //   credentials: 'include',
  // });

  // return response.body;

  const response = await axiosInstance.delete(`/posts/${postId}/likes`);
  return response;
};

export const fetchFileData = async (file: File) => {
  const response = await axiosInstance.post(`/files/image/upload`, file);
  return response.data as UploadedImage;
};

export const getPost = (postId: number): Promise<NPost> =>
  axiosInstance.get(END_POINT.POST(postId));

export const fetchAddBookarnk = async (postId: number) => {
  const response = await axiosInstance.post(END_POINT.ADD_BOOKMARK(postId));
  return response;
};

export const fetchDeleteBookarnk = async (postId: number) => {
  const response = await axiosInstance.post(END_POINT.DELETE_BOOKMARK(postId));
  return response;
};

export const fetchReportPost = async (postId: number) => {
  const response = await axiosInstance.post(END_POINT.REPORT_POST(postId), {
    reason: '신고합니다.',
    description: '신고 내용',
  });
  return response;
};

export const getVoteCount = (postId: number): Promise<VoteInfo[]> =>
  axiosInstance.get(END_POINT.VOTE_COUNT(postId));
