import { END_POINT } from '@/constants/api';
import { UploadedImage, FileUploadType } from '@/types/file';
import { axiosInstance } from './interceptor';

export const postFile = async (file: FormData, params: FileUploadType) => {
  const response = await axiosInstance.post(`${END_POINT.FILE_UPLOAD}`, file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      type: params.type,
    },
  });
  return response.data as UploadedImage;
};
