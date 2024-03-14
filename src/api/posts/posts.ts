import { CreatePost, Post, UploadedImage, VoteInfo } from '../../types/post';
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

export const fetchFileData = async () => {
  const response = await axiosInstance.post(`/files/image/upload`);
  return response.data as UploadedImage;
};
