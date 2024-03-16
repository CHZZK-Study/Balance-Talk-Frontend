export const getDate = (datetime: string) => {
  const [year, month, rest] = datetime.split('-');
  const day = rest.slice(0, 2);
  return `${year}-${month}-${day}`;
};
