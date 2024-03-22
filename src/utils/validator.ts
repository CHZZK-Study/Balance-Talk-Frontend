const isEmptyString = (str: string): boolean => {
  return str.trim() === '';
};

const isAllTrue = (obj: object): boolean => {
  return Object.values(obj).every((value) => value === true);
};

export { isEmptyString, isAllTrue };
