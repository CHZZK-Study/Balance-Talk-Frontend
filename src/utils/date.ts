export const getDate = (datetime: string) => {
  const date = datetime.split(' ')[0];
  return date.replace(/\//g, '.');
};

export const getCreatedDate = (createdDate: string) => {
  const diff = new Date().getTime() - new Date(createdDate).getTime();
  return Math.floor(diff / (60 * 60 * 24 * 1000));
};
