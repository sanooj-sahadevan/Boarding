// let arr = [
//   [1, 2],
//   [2, 4, [3, 8]],
//   [5, 8],
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
// }

// rec(arr);
// console.log(x);

// let arr = ["hey", "say", "my", "name"];

// console.log(arr.reverse());
// let x = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   let str = "";
//   for (j = arr[i].length - 1; j >= 0; j--) {
//     str += arr[i][j];
//   }
//   x.push(str);
// }

// console.log(x);

// let ar = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

// let arr = Array.from(new Set(ar));
// console.log(arr);
// let largest = 0,
//   second = 0,
//   third = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     third = second;
//     second = largest;
//     largest = arr[i];
//   } else if (largest > arr[i] && arr[i] < second) {
//     second = arr[i];
//   } else if (second > arr[i] && arr[i] < third) {
//     third = arr[i];
//   }
// }
// console.log(largest);
// console.log(second);
// console.log(third);

// const obj = { a: 1, b: 2, c: 3 };
// let arr = Object.entries(obj)
// console.log(arr.pop());
// console.log(Object.fromEntries(arr));

// function A() {
//   let ctr = 0;
//   return function () {
//     ctr++;
//     return ctr;
//   };
// }
// let x = A()
// console.log(x());

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
// }, 1000);

// (function (a,b){
//     console.log(a+b);

// })(2,2)

// function currying(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(currying(2)(3)(3));
//Practical :  Longest repeating character. Input:   “etrrrtutraaaaa”, Output : "aaaaa"
// let arr = "etrrrrrrrrrrrrrtutraaaaa";
// arr.split("");
// let f = {};
// for (let i = 0; i < arr.length; i++) {
//   f[arr[i]] = (f[arr[i]] || 0) + 1;
// }
// let largest = 0,
//   res;
// for (let key in f) {
//  // console.log(f[key]);
//   if (largest < f[key]) {
//     largest = f[key];
//     res = key;
//   }
// }
// console.log(res);

// function* generator() {
//   for (let i = 0; i < 10; i++) {
//     yield i;
//   }
// }

// const x = generator();
// setInterval(() => {
//   console.log(x.next().value);
// }, 1000);

// let obj = {
//   name: "SANOOj",
//   age: 22,
// };

// function A() {
//   console.log(`my name is ${this.name}, ${this.age}`);
// }

// A.call(obj);


// let arr = [
//   [1, 2],
//   [2, 4, [3, 8]],
//   [5, 8],
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
// }

// rec(arr);
// console.log(x);

// let arr = ["hey", "say", "my", "name"];

// console.log(arr.reverse());
// let x = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   let str = "";
//   for (j = arr[i].length - 1; j >= 0; j--) {
//     str += arr[i][j];
//   }
//   x.push(str);
// }

// console.log(x);

// let ar = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

// let arr = Array.from(new Set(ar));
// console.log(arr);
// let largest = 0,
//   second = 0,
//   third = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     third = second;
//     second = largest;
//     largest = arr[i];
//   } else if (largest > arr[i] && arr[i] < second) {
//     second = arr[i];
//   } else if (second > arr[i] && arr[i] < third) {
//     third = arr[i];
//   }
// }
// console.log(largest);
// console.log(second);
// console.log(third);

// const obj = { a: 1, b: 2, c: 3 };
// let arr = Object.entries(obj)
// console.log(arr.pop());
// console.log(Object.fromEntries(arr));

// function A() {
//   let ctr = 0;
//   return function () {
//     ctr++;
//     return ctr;
//   };
// }
// let x = A()
// console.log(x());

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
// }, 1000);

// (function (a,b){
//     console.log(a+b);

// })(2,2)

// function currying(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(currying(2)(3)(3));
//Practical :  Longest repeating character. Input:   “etrrrtutraaaaa”, Output : "aaaaa"
// let arr = "etrrrrrrrrrrrrrtutraaaaa";
// arr.split("");
// let f = {};
// for (let i = 0; i < arr.length; i++) {
//   f[arr[i]] = (f[arr[i]] || 0) + 1;
// }
// let largest = 0,
//   res;
// for (let key in f) {
//  // console.log(f[key]);
//   if (largest < f[key]) {
//     largest = f[key];
//     res = key;
//   }
// }
// console.log(res);

// function* generator() {
//   for (let i = 0; i < 10; i++) {
//     yield i;
//   }
// }

// const x = generator();
// setInterval(() => {
//   console.log(x.next().value);
// }, 1000);

// let obj = {
//   name: "SANOOj",
//   age: 22,
// };

// function A() {
//   console.log(`my name is ${this.name}, ${this.age}`);
// }

// A.call(obj);
