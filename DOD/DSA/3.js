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
//       this.tail.next = node;
//       node.prev = this.tail;
//     } else {
//       this.head = node;
//     }
//     this.size++;
//     this.tail = node;
//   }

//   reverse() {
//     let current = this.head;
//     let temp = null;
//     while (current) {
//       temp = current.prev;
//       current.prev = current.next;
//       current.next = temp;
//       current = current.prev;
//     }

//     if (temp) {
//       this.tail = this.head;
//       this.head = temp.prev;
//     }
//    }

//   sort() {
//     let swap;
//      do {
//        swap = false;
//       let curr = this.head;

//       while (curr && curr.next) {
//         if (curr.value > curr.next.value) {
//           let temp = curr.value;
//           curr.value = curr.next.value;
//           curr.next.value = temp;
//           swap = true;
//         }
//         curr = curr.next;
//       }
//     } while (swap);
//   }

// sort(){
//     let curr = this.head
//     for(let i =0;i<this.size;i++){
//         for(let j =0;j<this.size-1;j++){
//             if()
//         }
//     }
// }
//}

// const list = new Linkedlist();
// list.append(300);
// list.append(400);
// list.append(500);
// list.append(200);
// list.sort();
// list.print();

// let a = [3, 5, 7, 9, 2, 1];

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a.length-1; j++) {
//     if (a[j] < a[j + 1]) {
//       let temp = a[j];
//       a[j] = a[j + 1];
//       a[j + 1] = temp;
//     }
//   }
// }
// console.log(a);

// let a = [3, 5, 7, 9, 2, 1];
// //console.log(a.splice(0,2));

// function rec(a) {
// //   if (a.length == 0) {
// //     return 0;
// //   }

//   return a[0] + rec(a.splice(1));
// }

// console.log(rec(a));

function rec(n) {
  if (n == 5) return "o";
  console.log(n);

  n++;
  return rec(n);
}

console.log(rec(1));
