export const calculateTotalPages = (
  totalItems: number,
  itemsPerPage: number,
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

export const generatePageNumbers = (totalPages: number): number[] => {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};
