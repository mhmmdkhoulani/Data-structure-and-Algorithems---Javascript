//Bubble sort is sorting algorithm that compares adjacent elements
//and swaps them if they are in the wrong order
//The big o of bubble sort is O(n^2)

let list = [23, 56, 3, 2, 44, 5, 72, 3];

function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      //list.length - i - 1 is to avoid index out of bounds
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
}

bubbleSort(list);

list.forEach((value) => console.log(value));
