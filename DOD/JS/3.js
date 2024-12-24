//single

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  insert(value, index) {
    const node = new Node(value);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }

  delete(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
  }

  middleDelete() {
    if (!this.head || !this.head.next) {
      // If the list is empty or has only one node, set head to null
      this.head = null;
      return;
    }
  
    let fast = this.head;
    let slow = this.head;
  
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    if (slow && slow.next) {
      slow.next = slow.next.next; 
    }
  
    this.size--; 
  }

  reverse() {
    let curr = this.head;
    let prev = null
    let next = null
    while(curr){
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head   = prev
  }
  
}

const list = new Linkedlist();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5)
list.middleDelete()
list.reverse()
//list.insert(222, 3);
//list.delete(1);
list.print();
