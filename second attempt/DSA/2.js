// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size
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
//         console.log(this.table[i]);
//       }
//     }
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     this.table[index] = value;
//   }
// }

// const hash = new HashTable(100);
// hash.set("name", "sanooj");
// hash.set("age", 22);
// hash.print();

// class HashTable {
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
//         console.log(i, "=", this.table[i]);
//       }
//     }
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     this.table[index] = value;
//   }

//   linerProbing(key, value) {
//     let index = this.hash(key);
//     let startIndex = index;

//     while (this.table[index] && this.table[0] !== key) {
//       index = (index + 1) % this.size;
//       if (startIndex === index) {
//         return "no space";
//       }
//     }
//     this.table[index] = [key, value];
//   }

//   QudaricProbing(key, value) {
//     let index = this.hash(key);
//     let startIndex = index;

//     while (this.table[index] && this.table[0] !== key) {
//       index = (index + i * i) % this.size;
//       if(startIndex==index){
//         return 'there is no space'
//       }
//     }
//     this.table[index] = [key,value]
//   }
//   seperateChaning(key,value){
//     const index = this.hash(key)
//     let bucket = this.table[index]
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

// const hash = new HashTable(10);
// hash.set("BROTOTYPE", "MERN");
// hash.linerProbing("name", "SANOOJ");
// hash.linerProbing("naem", "SURESH");
// hash.seperateChaning('age','sanooj')
// hash.seperateChaning('gae','sanooj')


// hash.print();
