// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class LinkedList {
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
//       this.tail.next = node;
//       node.prev = this.tail;
//     } else {
//       this.head = node;
//     }
//     this.tail = node;
//     this.size++;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.size > 0) {
//       node.next = this.head;
//       this.head.prev = node;
//     } else {
//       this.tail = node;
//     }
//     this.head = node;
//     this.size++;
//   }

//   pop() {
//     if (this.size > 0) {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//     } else {
//       this.head = null;
//     }
//     this.size--;
//   }

//   shift() {
//     if (this.size > 0) {
//       this.head = this.head.next;
//       this.head.prev = null;
//     } else {
//       this.head = null;
//     }
//     this.size--;
//   }

//   middle() {
//     let curr = this.head;
//     let fast = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     console.log(slow.value, "midd");
//   }
//   middleDelete() {
//     let slow = this.head;
//     let fast = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//     slow.next.prev = slow.prev;
//     slow.prev.next = slow.next;
//   }

//   reverse() {
//     let curr = this.head;
//     let next = null;
//     let prev = null;
//     while (curr) {
//       next = curr.next;
//       curr.next = prev;
//       curr.prev = next;
//       prev = curr;
//       curr = next;
//     }

//     this.tail = this.head;
//     this.head = prev;
//   }

//   dep() {
//     let curr = this.head;

//     while (curr) {
//       let x = curr.next;
//       while (x) {
//         if (curr.value === x.value) {
//           if (x.next) {
//             x.next.prev = x.prev;
//           }
//           if (x.prev) {
//             x.prev.next = x.next;
//           }
//         }
//         x = x.next;
//       }
//       curr = curr.next;
//     }
//   }

//   depEf() {
//     let curr = this.head;
//     let seen = new Set();

//     while (curr) {
//       if (seen.has(curr.values)) {
//         const nextNode = curr.next;

//         if (curr.next) {
//           curr.next.prev = curr.prev;
//         }
//         if (x.prev) {
//           curr.prev.next = curr.next;
//         }
//       }
//     }
//   }
// }

// const node = new LinkedList();
// node.prepend(50);
// node.prepend(20);
// node.prepend(30);
// node.append(10);
// node.append(20);
// node.append(30);
// node.append(10);
// node.append(50);
// node.append(100);
// node.reverse();
// node.depEf();
// node.dep();
// //node.middle();
// //node.middleDelete();
// // node.shift()
// // node.pop();
// node.print();

let arr = [3, 4, 5, 6, 7, 8, 9, 1];

function merge(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let start = arr.slice(0, mid);
  let end = arr.slice(mid);
 return mergesort(merge(start), merge(end));
}

function mergesort(start, end) {
  let sorted = [];

  while (start.length && end.length) {
    if (start[0] <= end[0]) {
      sorted.push(start.shift());
    } else {
      sorted.push(end.shift());
    }
  }
  return [...sorted,...start,...end]
}
console.log(merge(arr));

// function quick(arr) {
//   if (arr.length < 2) return arr;

//   let piovt = arr[arr.length - 1];
//   let start = [];
//   let end = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < piovt) {
//       start.push(arr[i]);
//     } else {
//       end.push(arr[i]);
//     }
//   }
//   return [...quick(start), piovt, ...quick(end)];
// }

// console.log(quick(arr));
