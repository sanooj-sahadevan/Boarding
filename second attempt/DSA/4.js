// // // recursion

// // // let str = "malayalam";

// // // function recursion(str, i, j) {
// // //   if (i > j) return true
// // //   if (str[i] !== str[j]) return false;
// // //   return recursion(str, (i += 1), (j -= 1));
// // // }

// // // console.log(recursion(str, 0, str.length - 1));

// // // const a = [1, 2, 3, 4];

// // // function sum(a) {
// // //     if(a.length==0){
// // //         return 0
// // //     }

// // //     return a[0]+sum(a.splice(1))
// // // }
// // // console.log(sum(a));

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
//     this.tail = node;
//     this.size++;
//   }

//   add(index, value) {
//     const node = new Node(value);
//     let curr = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       curr = curr.next;
//     }
//     node.prev = curr;
//     node.next = curr.next;
//     curr.next = node;
//     curr.next.prev = node;
//   }

//   //   mid() {
//   //     let middle = Math.floor(this.size / 2);
//   //     let curr = this.head;
//   //     for (let i = 0; i < middle; i++) {
//   //       curr = curr.next;
//   //     }

//   //     curr.next.prev = curr.prev;
//   //     curr.prev.next = curr.next;
//   //   }

//   //   mid() {
//   //     let slow = this.head;
//   //     let fast = this.head;
//   //     while (fast!==null && fast.next!==null) {
//   //       slow = slow.next;
//   //       fast = fast.next.next;
//   //     }

//   //     console.log(slow.value,'midddddddddddddddd');

//   //     // slow.next.prev = slow.prev;
//   //     // slow.prev.next = slow.next;/
//   //   }

//   node(value) {
//     let curr = this.head;
//     let i = 0;
//     while (curr) {

//       if (curr.value == value) {
//         console.log(true,curr.value,'========',value);
//         console.log(i, "currrrrrrrrrrrrrrrrrrr");
//       }
//       i++;
//       curr = curr.next

//     }
//   }
// }

// const list = new Linkedlist();
// list.append(11);
// list.append(22);
// list.append(33);
// list.append(222);
// list.append(544);
// // list.mid();
// list.node(544);
// // list.add(4, 2222222222222);
// list.print();

// // class Stack {
// //   constructor() {
// //     this.capacity = [];
// //     this.size = 0;
// //   }

// //   print() {
// //     for (let i = 0; i < this.capacity.length; i++) {
// //       console.log(this.capacity[i]);
// //     }
// //   }

// //   push(value) {
// //     return this.capacity.push(value);
// //   }

// //   pop() {
// //     return this.capacity.pop();
// //   }
// // }

// // const stack = new Stack();
// // stack.push(1);
// // stack.push(2);
// // stack.push(3);
// // stack.pop();
// // stack.print();

// let a = [1,2,3,4]

// function recrusion(a){
//     if(a.length==0){
//         return 0
//     }

//     return a[0]+ recrusion(a.splice(1))

//}

//console.log('aa',recrusion(a));

// let a = "MOM";

// function recrusion(a, i, j) {
//   if (i > j) {
//     return true;
//   }

//   if (a[i] !== a[j]) return false;
//   return recrusion(a, (i += 1), (j -= 1));
// }

// console.log(recrusion(a, 0, a.length - 1));
