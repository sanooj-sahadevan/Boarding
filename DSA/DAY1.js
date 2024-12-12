// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class Linkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   print() {
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.value);
//       curr = curr.next;
//     }
//   }

  // push(value) {
  //   const node = new Node(value);
  //   if (this.size > 0) {
  //     node.prev = this.tail;
  //     this.tail.next = node;
  //   } else {
  //     this.head = node;
  //   }
  //   this.size++;
  //   this.tail = node;
  // }

//   unshift(value) {
//     const node = new Node(value);
//     if (this.size > 0) {
//       node.next = this.head;
//       this.head.prev = node;
//     } else {
//       this.head = node;
//     }
//     this.size++;
//     this.head = node;
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

//   insert(value, index) {
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

//   delete(index) {
//     let curr = this.head;
//     for (let i = 0; i < index; i++) {
//       curr = curr.next;
//     }

//     curr.next.prev = curr.prev;
//     curr.prev.next = curr.next;
//   }

//   search(value) {
//     let curr = this.head;
//     while (curr !== null) {
//       if (curr.value == value) {
//         console.log(curr.value, "hey hey hey");
//       }
//       curr = curr.next;
//     }
//     return false;
//   }

//   searchD(value) {
//     let curr = this.head;
//     let ctr = 0;
//     while (curr !== null) {
//       if (curr.value === value) {
//         console.log("curr.value", curr.value);
//         ctr++;

//         curr.next.prev = curr.prev;
//         curr.prev.next = curr.next;
//       }
//       curr = curr.next;
//     }
//     if (ctr === 0) {
//       console.log("no value");
//     }
//   }

//   middle() {
//     let curr = this.head;
//     let mid = Math.floor(this.size / 2);
//     for (let i = 0; i < mid; i++) {
//       curr = curr.next;
//     }
//     console.log(curr.value, "middlle");

//     curr.prev.next = curr.next;
//     curr.next.prev = curr.prev;
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
// }

// const list = new Linkedlist();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
// list.unshift(0);
// list.unshift(11);
// // list.insert(22222222222, 3);
// // list.insert(777777777, 5);
// // list.delete(0)
// // list.pop();
// // list.shift();
// // list.searchD(5);
// // list.middle();
// list.reverse()
// list.print();

let arr = [2, 4, 6, 1, 3, 4, 8, 9, 4];

// QUICK SORT

// function quick(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let start = [];
//   let end = [];
//   let pivot = arr[arr.length - 1];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (pivot < arr[i]) {
//       end.push(arr[i]);
//     } else {
//       start.push(arr[i]);
//     }
//   }

//   return [...quick(start), pivot, ...quick(end)];
// }

// function quick(a) {
//   if (a.length < 2) {
//     return a;
//   }

//   let end = [];
//   let start = [];
//   let pivot = a[a.length - 1];

//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[i] < pivot) {
//       start.push(a[i]);
//     } else {
//       end.push(a[i]);
//     }
//   }

//   return [...quick(start),pivot,...quick(end)]
// }
// console.log(quick(arr));

//MERGE SORT

// function merge(a) {
//   if (a.length < 2) {
//     return a;
//   }

//   let mid = Math.floor(a.length / 2);
//   let start = a.slice(0, mid);
//   let end = a.slice(mid);
//   return mergesort(merge(start), merge(end));
// }

// function mergesort(start, end) {
//   let sorted = [];
//   while (start.length && end.length) {
//     if (start[0] <= end[0]) {
//       sorted.push(start.shift());
//     } else {
//       sorted.push(end.shift());
//     }
//   }

//   return [...sorted,...start,...end]
// }

// function merge(a) {
//   if (a.length < 2) {
//     return a;
//   }

//   let mid = Math.floor(a.length / 2);
//   let start = a.slice(0, mid);
//   let end = a.slice(mid);
//   return mergesort(merge(start), merge(end));
// }

// function mergesort(start, end) {
//   let sorted = [];
//   while (start.length && end.length) {
//     if (start[0] <= end[0]) {
//       sorted.push(start.shift());
//     } else {
//       sorted.push(end.shift());
//     }
//   }
//   return [...sorted,...start,...end]
// }

// console.log(merge(arr));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  print(){
    let curr = this.head
    while(curr){
        console.log(curr.value);
        curr = curr.next
        
    }
  }

  push(value){
    const node = new Node(value)
    if(this.size>0){
        node.prev =this.tail
        this.tail.next = node

    }else{
        this.head = node
    }
    this.size++
    
  }
}

const list  =  new Linkedlist()
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.print()
