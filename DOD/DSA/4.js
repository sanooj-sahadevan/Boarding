// // double

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
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
//     this.tail = node;
//     this.size++;
//   }

//   insert(value, index) {
//     const node = new Node(value);
//     let curr = this.head;

//     for (let i = 0; i < index - 1; i++) {
//       curr = curr.next;
//     }
//     node.next = curr.next;
//     node.prev = curr;
//     curr.next.prev = node;
//     curr.next = node;
//   }

//   delete(index) {
//     let curr = this.head;
//     for (let i = 0; i < index; i++) {
//       curr = curr.next;
//     }
//     if (curr.prev) {
//       curr.prev.next = curr.next;
//     }
//     if (curr.next) {
//       curr.next.prev = curr.prev;
//     }
//     this.size--;
//   }

//   middleDelete() {
//     let fast = this.head;
//     let slow = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     slow.next.prev = slow.prev;
//     slow.prev.next = slow.next;
//   }

//   reverse() {
//     let curr = this.head;
//     let temp = null;
//     while (curr) {
//       temp = curr.prev;
//       curr.prev = curr.next;
//       curr.next = temp;
//       curr = curr.prev;
//     }

//     if (temp) {
//       this.tail = this.head;
//       this.head = temp.prev;
//     }
//   }
// }

// const list = new Linkedlist();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.append(7);
// //list.insert(2222, 2);
// //list.insert(33, 3);
// list.middleDelete();
// //list.delete(2);
// list.reverse()
// list.print();

// let n = 1

// while(n<5){
//   n +=n
//   n++
// }
// console.log(n);

// function recrsion(n) {
//   if (n === 1) return 1;
//   return n + recrsion(n - 1);
// }
// console.log(recrsion(3));

// function rec(n) {
//   if (n == 1) return 1;
//   return n * rec(n - 1);
// }
// console.log(rec(4));

// function rec(n) {
//   if (n === 5) return 5;
//   console.log(n);
//   return rec(n + 1);
// }

// console.log(rec(1));

// let a = "MOM";

// function rec(a, i, j) {
//   if (i > j) return true;
//   if (a[i] !== a[j]) return false;

//   return rec(a, (i += 1), (j -= 1));
// }

// console.log(rec(a, 0, a.length - 1));

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10));

// let arr = [1, 2];

// function rec(arr) {
//   if (arr.length == 0) return 0;

//   return arr[0] + rec(arr.splice(1));
// }
// console.log(rec(arr));

// let arr = "hellow world";

// function rec(arr, i) {
//   if (i >= arr.length) return arr;

//   if (arr[i] == "l") {
//     arr = arr.slice(0, i) + arr.slice(i + 1);
//     return rec(arr, i);
//   }
//   return rec(arr, i + 1);
// }

//console.log(rec(arr, 0));


