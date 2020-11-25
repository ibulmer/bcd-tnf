export const firstN = (n: number) => {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};
