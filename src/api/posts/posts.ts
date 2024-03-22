<<<<<<< HEAD
import { CreatePost, Post, UploadedImage, VoteInfo } from '../../types/post';
=======
import {
  CreatePost,
  Post,
  UploadedImage,
  VoteInfo,
  NPost,
} from '../../types/post';
import { END_POINT } from '../../constants/api';
>>>>>>> 6f83a3bf22fa562988cc87acbcd680ac320b203b
import { axiosInstance } from '../interceptor';

// const URL = process.env.API_URL;
export const fetchPostsData = async (): Promise<Post[]> => {
  // const response = await fetch(`${URL}/posts?member-id=1`);
  // const result = (await response.json()) as Post[];
  // return result;

  const response = await axiosInstance.get(`/posts`);
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
<<<<<<< HEAD

  // return response.status;

=======

  // return response.status;

>>>>>>> 6f83a3bf22fa562988cc87acbcd680ac320b203b
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
<<<<<<< HEAD

  // return response.body;

=======
  // return response.body;
>>>>>>> 6f83a3bf22fa562988cc87acbcd680ac320b203b
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
<<<<<<< HEAD

export const fetchFileData = async () => {
  const response = await axiosInstance.post(`/files/image/upload`);
  return response.data as UploadedImage;
=======

export const fetchFileData = async () => {
  const response = await axiosInstance.post(`/files/image/upload`);
  return response.data as UploadedImage;
};

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

export const getPost = async (postId: number): Promise<NPost> => {
  const response = await axiosInstance.get(END_POINT.POST(postId));
  return response.data as NPost;
>>>>>>> 6f83a3bf22fa562988cc87acbcd680ac320b203b
};

export const getVoteCount = (postId: number): Promise<VoteInfo[]> =>
  axiosInstance.get(END_POINT.VOTE_COUNT(postId));
