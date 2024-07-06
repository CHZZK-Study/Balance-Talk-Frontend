import { END_POINT } from '@/constants/api';
import { Id } from '@/types/api';
import { TalkPick, TalkPickProps } from '@/types/talk-pick';
import { Pageable } from '@/types/pagination';
import { axiosInstance } from './interceptor';

export const getTalkPick = async (talkPickId: Id) => {
  const { data } = await axiosInstance.get<TalkPick>(
    END_POINT.TALKPICK(talkPickId),
  );
  return data;
};

export const putTalkPick = async (
  talkPickId: Id,
  talkPickData: TalkPickProps,
) => {
  const response = await axiosInstance.put(
    END_POINT.TALKPICK(talkPickId),
    talkPickData,
  );
  return response;
};

export const deleteTalkPick = async (talkPickId: Id) => {
  const response = await axiosInstance.delete(END_POINT.TALKPICK(talkPickId));
  return response;
};

export const postTalkPick = async (talkPickData: TalkPickProps) => {
  const response = await axiosInstance.post(
    END_POINT.CREATE_TALKPICK,
    talkPickData,
  );
  return response;
};

export const getTodayTalkPick = async (pageable: Pageable) => {
  const { data } = await axiosInstance.get<TalkPickProps>(
    END_POINT.TODAY_TALKPICK,
    {
      params: { ...pageable, sort: 'createdAt,desc' },
    },
  );
  return data;
};
