import dayjs from 'dayjs';

export const calculateDday = (deadline: string) => {
  const today = dayjs();
  const deadlineDay = dayjs(deadline);
  const dDay = deadlineDay.diff(today, 'days');

  return dDay;
};
