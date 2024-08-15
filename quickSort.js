function quickSort(arr, start, end) {
  if (end <= start) return;
  let pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}
function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}
const arr = [3, 45, 62, 35, 78, 23, 2, 1];
quickSort(arr, 0, arr.length - 1);
arr.forEach((ele) => console.log(ele));
