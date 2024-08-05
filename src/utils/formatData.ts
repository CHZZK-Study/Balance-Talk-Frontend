export const formatDate = (date: string): string => {
  return date.replace(/-/g, '.');
};

export const formatNumber = (number: number): string => {
  return number.toLocaleString('ko-KR');
};
