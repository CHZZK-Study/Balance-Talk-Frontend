export const getDate = (datetime: string) => {
  const [year, month, rest] = datetime.split('-');
  const day = rest.slice(0, 2);
  return `${year}-${month}-${day}`;
};

export const getCreatedDate = (createdDate: string) => {
  const diff = new Date().getTime() - new Date(createdDate).getTime();
  return Math.floor(diff / (60 * 60 * 24 * 1000));
};
