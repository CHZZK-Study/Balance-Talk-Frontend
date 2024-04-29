import {
  CreatePost,
  Post,
  UploadedImage,
  VoteInfo,
  NPost,
  PostWithPagenation,
} from '../../types/post';
import { END_POINT } from '../../constants/api';
import { axiosInstance } from '../interceptor';

export const fetchPostsData = async (
  sort: string = 'createdAt',
  page: number = 0,
  showClosed: boolean = false,
): Promise<PostWithPagenation> => {
  const response = await axiosInstance.get(
    `/posts?closed=${showClosed}&page=${page}&sort=${sort},desc`,
  );
  return response.data as PostWithPagenation;
};

export const fetchBestPostsData = async () => {
  const response = await axiosInstance.get(`/posts/best`);
  return response.data as Post[];
};

export const fetchVoteCount = async (postId: number): Promise<VoteInfo[]> => {
  try {
    const response = await axiosInstance.get(END_POINT.VOTE_COUNT(postId));
    return response.data as VoteInfo[];
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (postForm: CreatePost) => {
  try {
    const response = await axiosInstance.post('/posts', postForm, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(postForm);
    console.log(response.data);

    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostById = async (postId: number): Promise<Post> => {
  const response = await axiosInstance.get(`/posts/${postId}`);
  return response.data as Post;
};

export const fetchPostSearchTitle = async (
  keyword: string,
): Promise<Post[]> => {
  const response = await axiosInstance.get(
    `/posts/title?keyword=${encodeURIComponent(keyword)}`,
  );
  return response.data as Post[];
};

export const fetchPostSearchTag = async (tagName: string): Promise<Post[]> => {
  const response = await axiosInstance.get(
    `/posts/tag?tagName=${encodeURIComponent(tagName)}`,
  );
  return response.data as Post[];
};

export const fetchAddLike = async (postId: number) => {
  const response = await axiosInstance.post(`/posts/${postId}/likes`);
  return response;
};

export const fetchDeleteLike = async (postId: number) => {
  const response = await axiosInstance.delete(`/posts/${postId}/likes`);
  return response;
};

export const deletePost = async (postId: number) => {
  const response = await axiosInstance.delete(`/posts/${postId}`);
  return response;
};

export const fetchFileData = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file, file.name);
  const response = await axiosInstance.post(`/files/image/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data as UploadedImage;
};

export const getPost = async (postId: number): Promise<NPost> => {
  const response = await axiosInstance.get(END_POINT.POST(postId));
  return response.data as NPost;
};

export const fetchAddBookmark = async (postId: number) => {
  const response = await axiosInstance.post(END_POINT.ADD_BOOKMARK(postId));
  return response;
};

export const fetchDeleteBookmark = async (postId: number) => {
  const response = await axiosInstance.delete(
    END_POINT.DELETE_BOOKMARK(postId),
  );
  return response;
};

export const fetchReportPost = async (postId: number) => {
  const response = await axiosInstance.post(END_POINT.REPORT_POST(postId), {
    category: 'ETC',
    description: '게시글 신고 내용',
  });
  return response;
};

export const getVoteCount = (postId: number): Promise<VoteInfo[]> =>
  axiosInstance.get(END_POINT.VOTE_COUNT(postId));
