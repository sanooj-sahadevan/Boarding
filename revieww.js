// class Linkedlist {
//   constructor() {
//     this.size = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   //   reverse() {
//   //     let temp = null;
//   //     let curr = this.head;

//   //     while (curr) {
//   //       temp = curr.next;
//   //       curr.next = curr.prev;
//   //       curr.prev = temp;
//   //       next = curr;
//   //       curr = prev;
//   //     }
//   //     this.head = this.tail;
//   //     this.tail = prev;
//   //   }

// //   checkCircular() {
// //     let fast = this.head;
// //     let slow = this.head;

// //     while (fast && fast.length) {
// //       slow = slow.next;
// //       fast = fast.next.next;

// //       if (fast === fast) {
// //         return console.log("this is circular");
// //       }
// //     }
// //   }
// }

// count of the accurence of the hashtable

// let str = "sanooj";
// let f = {};
//   for (i = 0; i < str.length; i++) {
//     f[str[i]] = 0;
//   }
//   for (i = 0; i < str.length; i++) {
//     f[str[i]]++;
//   }
// console.log(f);

// remove the deplicete from arr -- recrusion

// let arr = [1, 2, 3, 1, 3, 4, 5, 4];

// function rec(arr, index = 0, result = []) {
//   if (arr.length === index) return result;

//   if (!result.includes(arr[index])) {
//     result.push(arr[index]);
//   }
//   return rec(arr, index + 1, result);
// }

// console.log(rec(arr));

let arr = [1, 2, 3, 1, 3, 4, 5, 4];

let obj = {};

function rec(arr, index = 0, result = []) {
  if (arr.length === index) return result;

  if (!obj[arr[index]]) {
    obj[arr[index]] = obj[arr[index]];
  }

  return rec(arr, index + 1, result);
}
rec(arr);
console.log(Object.keys(obj));
