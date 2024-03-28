export const getFormattedDate = (datetime: string) => {
  const date = datetime.split(' ')[0];
  return date.replace(/\//g, '.');
};

export const getDate = (date: string) => {
  const diff = new Date().getTime() - new Date(date).getTime();
  return Math.floor(diff / (60 * 60 * 24 * 1000));
};

export const isFinished = (date: string) => {
  console.log(date);
  const [yearMonthDay, hourMinuteSecond] = date.split(' ');
  const [year, month, day] = yearMonthDay
    .split('/')
    .map((el: string) => Number(el));
  const [hour, minute, second] = hourMinuteSecond
    .split(':')
    .map((el: string) => Number(el));

  return (
    new Date(year, month, day, hour, minute, second).getTime() -
      new Date().getTime() <
    0
  );
};
