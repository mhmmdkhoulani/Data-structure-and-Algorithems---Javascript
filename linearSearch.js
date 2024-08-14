//Linear sharch
// The big o of linear search is O(n) linear time
//Linear search is looging through an array
//Searching through a linkedlist
//Slow for larg data sets
//Fast for small data sets
//Doesn't need to be sorted

const list = [23, 4, 4, 9, 6, 32];
function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch(list, 32));
