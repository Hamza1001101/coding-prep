function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i]++;
      return arr;
    } else arr[i];
  }
  arr.unshift(1);
  return arr;
}
