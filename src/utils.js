export const sortWithId = (arr) => {
  return arr?.sort((a, b) => a.id - b.id);
};
