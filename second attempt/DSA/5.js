// // Give the non-repeating string using hashtable.
// let a = "helloworlddytttt";
// //  Output : "helloworlddyttt"

// let f = {};
// let x = [],
//   y = 0;
// for (let i = 0; i < a.length; i++) {
//   f[a[i]] = 0;
// }

// for (let i = 0; i < a.length; i++) {
//   f[a[i]]++;
// }
// for (let key in f) {
//   if (f[key] == 1) {
//     x.push(key);
//   }
// }
// let largest = 0;
// for (let key in f) {
//   if (f[key] > largest) {
//     largest = f[key];
//     y = key;
//   }
// }

// console.log(x);
// console.log(largest);
// console.log(y);

// function merge(a) {
//   if (a.length < 2) return a;
//   let mid = Math.floor(a.length / 2)
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
//   return [...sorted, ...start,...end];
// }

// console.log(merge(a));

// function quick(a) {
//   if (a.length<2) return a;

//   let pivot = a[a.length - 1];
//   let start = [];
//   let end = [];

//   for (let i = 0; i < a.length - 1; i++) {
//     if (pivot > a[i]) {
//       start.push(a[i]);
//     } else {
//       end.push(a[i]);
//     }
//   }
//   return [...quick(start), pivot, ...quick(end)];
// }
// console.log(quick(a));

// function buble(a) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < a.length; i++) {
//       if (a[i]< a[i + 1]) {
//         let temp = a[i];
//         a[i] = a[i + 1];
//         a[i + 1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap);
//   return a
// }

// console.log(buble(a));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Linkedlist {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.size > 0) {
      node.prev = this.tail;
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  arraytolinkedlist() {
    let a = [3, 2, 5, 7, 8, 1, 9, 3];
    for (let i = 0; i < a.length; i++) {
      this.append(a[i]);
    }
  }
  middleD() {
    let mid = Math.floor(this.size / 2);
    let curr = this.head;
    for (let i = 0; i < mid; i++) {
      curr = curr.next;
    }
    curr.next.prev = curr.prev;
    curr.prev.next = curr.next;
  }

  duplicate() {
    let curr = this.head;
    while (curr) {
      let x = curr.next;
      while (x) {
        if (curr.value === x.value) {
          return console.log("seri da");
        }
        x = x.next;
      }
      curr = curr.next;
    }
    return console.log("poda");
  }

  reverse() {
    let curr = this.head;
    let next = null;
    let prev = null;
    while (curr) {
      next = curr.next;
      curr.next = curr.prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
  sort() {
    let swap;
    do {
      swap = false;
      let curr = this.head;
      while (curr && curr.next) {
        if (curr.value > curr.next.value) {
          let temp = curr.value;
          curr.value = curr.next.value;
          curr.next.value = temp;
          swap = true;
        }
        curr = curr.next;
      }
    } while (swap);
  }

  cycle() {
    // if (this.head && this.tail) {
    //   this.tail.next = this.head;
    //   this.head.prev = this.tail;
    // }
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    curr.next = this.head;
    this.head.prev = curr;
  }

  chechkCycle() {
    let curr = this.head;
    if (this.tail.next === this.head && this.head.prev === this.tail) {
      return console.log("cycle");
    } else {
      return console.log("noo cycle");
    }
  }
}
const list = new Linkedlist();

list.arraytolinkedlist();
//list.middleD();
//list.duplicate();
//list.reverse()
//list.cycle();
list.chechkCycle();
//list.sort();
list.print();
