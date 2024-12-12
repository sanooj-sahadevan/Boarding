class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
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

  push(value) {
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

  unshift(value) {
    const node = new Node(value);
    if (this.size > 0) {
      node.next = this.head;
      this.head.prev = node;
    } else {
      this.head = node;
    }
    this.size++;
    this.head = node;
  }
}

const list = new Linkedlist();
list.push(3);
list.push(4);
list.push(5);
list.unshift(2)
list.unshift(1)
list.print();
