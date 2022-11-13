export const sum = (arr : number[]) => arr.reduce((partialSum, a) => partialSum + a, 0);
export const mean = (arr : number[]) => sum(arr) / arr.length;
export const variance = (arr : number[]) => {
  const m = mean(arr);
  return sum(arr.map(v => (v - m) ** 2));
};
export const std = (arr : number[]) => Math.sqrt(variance(arr));