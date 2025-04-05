// //calculate sum of 3 different function with 3 different execution time returns 3 different number

const { log } = require("console");

// const { log } = require("console");

// async function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(5), 1000); // Returns 5 after 1 second
//   });
// }

// async function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(10), 2000); // Returns 10 after 2 seconds
//   });
// }

// async function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(15), 1500); // Returns 15 after 1.5 seconds
//   });
// }

// async function ADD() {
//   let x = await a();
//   let y = await b();
//   let z = await c();
//   return x + y + z;
// }
// ADD().then((a) => {
//   console.log(a);
// }).catch((a)=>{
//     console.log(a);

// })

// let arr  = [1,2,3,4,5,]

// let x = arr.some((a)=>a===5)
// console.log(x);

// let obj = {
//   name: "SANOOJ",
//   age: 23,
// };

// function A(k) {
//   console.log(`my name is ${k} ${this.name} KHAN `);
// }

// // A.call(obj);
// // A.apply(obj,["KING"])
// let x = A.bind(obj,["KING"])
// x()

// const x = [1, 2, 3, 4, 5, 3];
// // let y = structuredClone(x);
// let y = JSON.parse(JSON.stringify(x))
// x[0] = 1000;
// console.log(x);
// console.log(y);

// let a = 100
// let b = a
//  b=10
// console.log(a);
// console.log(b);

// reverse the array and elements of the array

let a = "say my name";
// a = a.split(" ");
// console.log(a.reverse());
let x = [];
let word = "";
for (let i = a.length - 1; i >= 0; i--) {
  if (a[i] !== " ") {
    word += a[i];
  } else {
    x.push(word);
    word = "";
  }
}
 x.push(word);
 console.log(x);

// let arr = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [
//     [1, 2, 3],
//     [2, 3, 4],
//   ],
// ];

// let x = [];

// function rec(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       rec(arr[i]);
//     } else {
//       x.push(arr[i]);
//     }
//   }
//   return x;
// }

// console.log(rec(arr));

// let a = [2, 4, 1, 3, 7, 6, 5, 9, 8];

// let largest = 0;
// let second = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > largest) {
//     second = largest;
//     largest = a[i];
//   }

//   while (a[i] > second && largest !== a[i]) {
//     second = a[i];
//   }
// }
// console.log(largest);

// console.log(second);
