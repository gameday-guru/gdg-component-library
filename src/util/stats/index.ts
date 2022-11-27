export const sum = (arr : number[]) => arr.reduce((agg, val) => agg + val, 0);
export const mean = (arr : number[]) =>{
  return sum(arr) / arr.length
};
export const variance = (arr : number[]) => {
  const m = mean(arr);
  return sum(arr.map(v => (v - m) ** 2))/arr.length;
};
export const std = (arr : number[]) => Math.sqrt(variance(arr));