export const formatDate = (date: string): string => {
  return date.replace(/-/g, '.');
};

export const formatDateFromISO = (isoString: string): string => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const formatNumber = (number: number): string => {
  return number.toLocaleString('ko-KR');
};
