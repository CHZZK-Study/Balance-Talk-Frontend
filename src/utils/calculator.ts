export const getPercent = (total: number, target: number) =>
  Math.round((target / total) * 100);

export const getRandomNumber = (num: number) => {
  return Math.floor(Math.random() * num);
};
