import { END_POINT } from '@/constants/api';
import { UploadedImage } from '@/types/post';
import { axiosInstance } from '../interceptor';

export const postFile = async (file: FormData) => {
  const response = await axiosInstance.post(`${END_POINT.FILE_UPLOAD}`, file);
  return response.data as UploadedImage;
};
