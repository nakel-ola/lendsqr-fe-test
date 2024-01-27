export const removeDuplicates = <T = any>(arr: T[], property: keyof T) => {
  const seen = new Set();
  return arr.filter((item) => {
    const value = item[property];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};
