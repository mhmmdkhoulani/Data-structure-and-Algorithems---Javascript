//Binary search is algorithm that searches for an element in a sorted array
//Half of the array is eleminated and search continues on each step
//The big o of binary search is O(log n) binary time

let list = [1, 4, 6, 7, 8];

function binarySearch(list, target) {
  //get the low and high values
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //get the middle value

    let value = list[mid];

    if (value < target) low = mid + 1;
    else if (value > target) high = mid - 1;
    else return mid;
  }
  return -1;
}

console.log(binarySearch(list, 88));
