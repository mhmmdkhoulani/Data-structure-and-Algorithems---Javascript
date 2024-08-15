function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;
  // Compare elements from the two halves and merge them in sorted order
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  // If there are remaining elements in either left or right, add them to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
function mergeSort(array) {
  // Base case: arrays with less than 2 elements are already sorted
  if (array.length <= 1) {
    return array;
  }
  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}
// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
