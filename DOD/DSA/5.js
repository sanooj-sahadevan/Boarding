//Remove the duplicates from an array using recursion or normal ways
// let arr = [1, 2, 3, 2, 4, 5, 3, 6, 7, 9];
// let a = "SMS";

// function rec(a, i, j) {
//   if (i > j) return true;
//   if (a[i] !== a[j]) return false;
//   return rec(a, (i += 1), (j -= 1));
// }

// console.log(rec(a, 0, a.length - 1));

// function rec(arr, index = 0, result = []) {
//   if (index === arr.length) return result;

//   if (!result.includes(arr[index])) {
//     result.push(arr[index]);
//   }
//   return rec(arr, index + 1, result);
// }

// console.log(rec(arr));

// Reverse the string using linklist

// class Node {
//   constructor(value) {
//     this.next = null;
//     this.prev = null;
//     this.value = value;
//   }
// }

// class Linkedlist {
//   constructor() {
//     this.size = 0;
//     this.head = null;
//     this.tail = null;
//   }
//   print() {
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.value);
//       curr = curr.next;
//     }
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.size > 0) {
//       node.prev = this.tail;
//       this.tail.next = node;
//     } else {
//       this.head = node;
//     }
//     this.size++;
//     this.tail = node;
//   }
// }

// const list = new Linkedlist();

// list.append("sanooj");
// list.append("sanooooj");
// list.append("sannnooj");
// list.append("saaanooj");
// list.print();

// Remove the duplicates from an array using recursion or normal ways
// let arr = [1, 2, 3, 4, 2, 3, 5, 7, 5];

// function rec(arr, index = 0, res = []) {
//   if (index === arr.length) return res;
//   if (!res.includes(arr[index])) res.push(arr[index]);
//   return rec(arr, index + 1, res);
// }

// console.log(rec(arr));

// let str = "SMS";

// function rec(str, i, j) {
//   if (i > j) return true;
//   if (str[i] !== str[j]) return false;

//  return rec(str, (i += 1), (j -= 1));
// }

// console.log(rec(str, 0, str.length-1));

// recursion
// print value exact 5 times
//   fib--(one value, all value)
//   array sum

// let arr = [1, 2, 3, 4];

// function rec(arr) {
//   if (arr.length == 0) return 0;

//   return arr[0] + rec(arr.splice(1));
// }

// console.log(rec(arr));

// function rec(n = 1) {
//   if (n > 5) return '';
//   console.log(n);

//   return rec(n + 1);
// }
// console.log(rec());

// let arr = [100, 2, 3, 4, 1, 5, 9, 6];
// function merge(arr) {
//   if (arr.length < 2) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let start = arr.slice(0, mid);
//   let end = arr.slice(mid);

//   return mergeSort(merge(start), merge(end));
// }

// function mergeSort(start, end) {
//   let sorted = [];
//   while (start.length && end.length) {
//     if (start[0] <= end[0]) {
//       sorted.push(start.shift());
//     } else {
//       sorted.push(end.shift());
//     }
//   }
//   return [...sorted, ...start, ...end];
// }
// console.log(merge(arr));

// function quick(arr) {
//   if (arr.length < 2) return arr;

//   let piovt = arr[arr.length - 1];
//   let start = [];
//   let end = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (piovt > arr[i]) {
//       start.push(arr[i]);
//     } else {
//       end.push(arr[i]);
//     }
//   }

//   return [...quick(start),piovt,...quick(end)]
// }

// console.log(quick(arr));
