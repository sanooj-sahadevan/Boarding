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

//   prepend(value) {
//     const node = new Node(value);
//     if (this.size > 0) {
//       node.next = this.head;
//       this.head.prev = node;
//     } else {
//       this.head = node;
//     }
//     this.head = node;
//     this.size++;
//   }
//   middle() {
//   let  mid = Math.floor(this.size / 2);
//     let curr = this.head;
//     for (let i = 0; i < mid; i++) {
//       curr = curr.next;
//     }
//     curr.next.prev = curr.prev
//     curr.prev.next = curr.next
//     console.log(curr.value,'-mid');
//   }
// }

// const list = new Linkedlist();
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.prepend(1);
// list.prepend(0);
// list.middle()
// list.print();

// class Hashtabel {
//   constructor(size) {
//     this.size = size;
//     this.table = new Array(size);
//   }

//   hash(key) {
//     let index = 0;
//     for (let i = 0; i < key.length; i++) {
//       index += key.charCodeAt(i);
//     }
//     return index % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     this.table[index] = value;
//   }

//   linerProbing(key, value) {
//     const index = this.hash(key);
//     let startIndex = index;

//     while(this.table[index]&& this.table[index][0]!==key){
//       index = index+1%this.size
//       if(startIndex===index){
//         console.log('no sapce');

//       }
//     }
//     this.table[index] = [key, value];
//   }

//   print() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(this.table[i]);
//       }
//     }
//   }
// }

// const hash = new Hashtabel(100);
// hash.linerProbing("name", "sanooj");
// hash.print();

// class HashTable {
//   constructor(size) {
//     this.size = size; // Correctly assign the size
//     this.table = new Array(size); // Initialize the table
//   }

//   hash(key) {
//     let index = 0;
//     for (let i = 0; i < key.length; i++) {
//       index += key.charCodeAt(i);
//     }
//     return index % this.size;
//   }

//   print() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(`Index ${i}: Key-Value Pair`, this.table[i]);
//       }
//     }
//   }

//   linearProbing(key, value) {
//     let index = this.hash(key);
//     const startIndex = index;

//     while (this.table[index] && this.table[index][0] !== key) {
//       index = (index + 1) % this.size;
//       if (startIndex === index) {
//         console.log("Error: No space available in the hash table.");
//         return false; 
//       }
//     }

//     this.table[index] = [key, value]; 
    
//   }
// }

// const table = new HashTable(10); 
// table.linearProbing("name", "Sanooj");
// table.linearProbing("email", "sanooj@example.com");
// table.linearProbing("address", "India");
// table.print();
