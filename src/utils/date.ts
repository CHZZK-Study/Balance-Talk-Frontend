export const getFormattedDate = (datetime: string) => {
  const date = datetime.split(' ')[0];
  return date.replace(/\//g, '.');
};

export const getDate = (date: string) => {
  const diff = new Date().getTime() - new Date(date).getTime();
  return Math.floor(diff / (60 * 60 * 24 * 1000));
};

export const getYearMonthDay = (date: string) => {
  return date.split('T')[0];
};

export const isFinished = (date: string) => {
  const [yearMonthDay, hourMinuteSecond] = date.split(' ');
  const [year, month, day] = yearMonthDay
    .split('/')
    .map((el: string) => Number(el));
  const [hour, minute, second] = hourMinuteSecond
    .split(':')
    .map((el: string) => Number(el));
  const deadline = new Date(year, month - 1, day, hour, minute, second);
  const now = new Date();

  return deadline.getTime() - now.getTime() < 0;
};
