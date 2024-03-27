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
