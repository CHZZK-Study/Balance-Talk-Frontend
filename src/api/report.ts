import { END_POINT } from '@/constants/api';
import { Id } from '@/types/api';
import { axiosInstance } from './interceptor';

export const postCommentReport = async (
  talkPickId: Id,
  commentId: Id,
  reportReason: string,
) => {
  const response = await axiosInstance.post(
    END_POINT.REPORT_COMMENT(talkPickId, commentId),
    {
      reportType: 'COMMENT',
      reason: reportReason,
    },
  );
  return response;
};
