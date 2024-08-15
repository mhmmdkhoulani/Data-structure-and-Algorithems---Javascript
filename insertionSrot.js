//Insertion sort is a sorting algorithm which start from the second element in the list and comapry it with the all element to the left if there is any element bigger than the element will swap
//best case is o(n) worst case is o(n2);

let list = [23, 45, 64, 2, 56, 75, 44];

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    //declare the temp to be at first the second element
    let temp = list[i];

    //take the element to the left of the temp
    let j = i - 1;

    //loop over the left elements and finish once the j>= o means at the end of the left elemnts or if the valaue of element is bigger than the temp
    while (j >= 0 && list[j] > temp) {
      //on each setp shift the element to the rifht
      list[j + 1] = list[j];
      j--;
    }
    // store the temp in the j + 1
    list[j + 1] = temp;
  }
}

insertionSort(list);
list.forEach((ele) => console.log(ele));
