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
  prepend(value) {
    const node = new Node(value);
    if (this.size > 0) {
      node.next = this.head;
      this.head.prev = node;
    } else {
      this.head = node;
    }
    this.head = node;
    this.size++;
  }

  middle() {
    let mid = Math.floor(this.size / 2);
    let curr = this.head;
    for (let i = 0; i < mid; i++) {
      curr = curr.next;
    }
    curr.next.prev = curr.prev;
    curr.prev.next = curr.next;
  }
  pop() {
    if (this.size > 0) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
  }

  shift() {
    if (this.size > 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
    }
  }

  add(index, value) {
    const node = new Node(value);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.prev = curr;
    node.next = curr.next;
    curr.next.prev = node;
    curr.next = node;
  }

  delete(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }

  reverse() {
    let curr = this.head;
    let next = null;
    let prev = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
}

const list = new Linkedlist();
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.prepend(1);
list.prepend(0);
list.shift();
list.pop();
list.add(3, 333);
list.delete(2);
list.reverse();
// list.middle();
// list.print();

// sort

// MERGE SORT
let arr = [2, 4, 3, 1, 5, 6];
function merge(a) {
  if (a.length < 2) {
    return a;
  }
  let mid = Math.floor(a.length / 2);
  let start = a.slice(0, mid);
  let end = a.slice(mid);
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
  return [...sorted, ...start, ...end];
}

console.log(merge(arr));

// quick sort

function quick(a) {
  if (a.length < 2) {
    return a;
  }
  let pivot = a[a.length - 1];
  let start = [];
  let end = [];
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      start.push(a[i]);
    } else {
      end.push(a[i]);
    }
  }
  return [...quick(start), pivot, ...quick(end)];
}

console.log(quick(arr));
