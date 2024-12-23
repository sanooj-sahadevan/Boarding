// class Hashtable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
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
//         console.log(this.table[i], i);
//       }
//     }
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     this.table[index] = [key, value];
//   }

//   linear(key, value) {
//     let index = this.hash(key);
//     let secondIndex = index;

//     while (this.table[index] && this.table[index][0] !== key) {
//       index = (index + 1) % this.size;

//       if (secondIndex === index) {
//         console.log("no sapce");
//         return
//       }
//     }
//     this.table[index] = [key, value];

//   }

//   Qudric(key, value) {
//     let index = this.hash(key);
//     let secondIndex = index;
//     let i = 1;
//     while (this.table[index] && this.table[index][0] !== key) {
//       index = (secondIndex + i * i) % this.size;
//       i++;
//       if (i > this.size) {
//         return "there is no space";
//       }

//     }
//     this.table[index] = [key, value];
//   }

//   seperateChaining(key, value) {
//     const index = this.hash(key);
//     const bucket = this.table[index];

//     if(!bucket){
//         this.table[index] = [key,value]
//     }else{
//         let samekey = bucket.find((item)=>item[0]===key)
//         if(samekey){
//             samekey[1] = value
//         }else{
//             bucket.push([key,value])
//         }
//     }
//   }
// }

// const hash = new Hashtable(10);
// hash.set("key", "value");
// hash.linear("name", "sanooj");
// hash.linear("nmae", "sanooooooooooooooj");
// hash.Qudric('ola',"pkd")
// hash.Qudric('oal',"pkddddd")

// // hash.seperateChaining("age", "22");
// // hash.seperateChaining("aea", "22");

// hash.print();

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
//   checkcycle() {
//     let fast = this.head;
//     let slow = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//       if (fast === slow) {
//         return console.log("cycle");
//       }
//     }
//     return console.log("noooooooooooo");
//   }

//   createCycle(){
//     if(this.head && this.tail){
//       this.head.prev = this.tail
//       this.tail.next = this.head
//     }
//   }
// }

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.createCycle()
// //list.checkcycle();
// list.print();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();
