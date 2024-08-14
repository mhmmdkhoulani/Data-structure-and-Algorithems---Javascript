//Selection sort is sorting algorithm that keep tracking of the minimum value during each iteration
//and at end of each iteration it swaps the minimum value with the first value
//The big o of selection sort is O(n^2)

let list = [23, 56, 3, 2, 44, 5, 72, 3];

function selectionSort(list) {
  // Loop through each element in the array
  for (let i = 0; i < list.length; i++) {
    // Find the minimum element in the unsorted part of the array
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      // Compare the current element with the minimum found so far
      if (list[min] > list[j]) {
        // If the current element is smaller, it becomes the new minimum
        min = j;
      }
    }
    // Swap the minimum element with the first element
    // let temp = list[i];
    // list[i] = list[min];
    // list[min] = temp;
    [list[i], list[min]] = [list[min], list[i]]; // swap using destructuring
  }
}

selectionSort(list);
list.forEach((value) => console.log(value));
