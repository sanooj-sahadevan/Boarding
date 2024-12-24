// while (current) {
//     let nextNode = current.next;
//     while (nextNode) {
//       if (current.value > nextNode.value) {
//         let temp = current.value;
//         current.value = nextNode.value;
//         nextNode.value = temp;
//       }
//       nextNode = nextNode.next;
//     }
//     current = current.next;
//   }

// remove adjacent odd elements from array - not completed,

// let arr = [1, 3, 4, 2, 5, 7,10, 3, 8];

// let x = arr.filter((curr, i, arr) => {
//   if (curr % 2 == 0) {
//     return !arr[i + 1] % 2 == 1 || arr[i - 1] % 2 == 1;
//   }
// });
// console.log(x);

// remoove last element elememt

// const obj = { a: 1, b: 2, c: 3 };
// let x= Object.entries(obj)
// x.pop()
// x = Object.fromEntries(x)
// console.log(x);

// clouser

// function A(){
//     let ctr= 1
//     return function(){
//         ctr++
//         return ctr
//     }
// }

// let x = A()
// console.log(x());
// console.log(x());

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//       setTimeout(() => {
//         console.log("Step 4");
//         console.log("End");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// function A(B) {
//   return new Promise((resolve) => {
//     B();
//     console.log("Monna Akil");
//     resolve();
//   });
// }

// function B() {
//   console.log("Sanooj");
// }

// A(B).then(()=>{
//     console.log('k');

// })

// function A(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

// A(2)(2)(2);

// (function (a, b) {
//   console.log(a + b);
// })(5, 3);

// (function A() {
//   console.log(a + b);
// })(5, 5);

// function Currying(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }
// Currying(2)(2)(2)

// Practical :  Longest repeating character. Input:   “etrrrtutraaaaa”, Output : "aaaaa"
// let a = "etrrrrrrrrrrrrrtutraaaaa";
// a = a.split("");

// let f = {};
// for (let i = 0; i < a.length; i++) {
//   f[a[i]] = 0;
// }
// for (let i = 0; i < a.length; i++) {
//   f[a[i]]++;
// }
// let laregst = 0,
//   result;
// for (let key in f) {
//   if (laregst < f[key]) {
//     laregst = f[key];
//     result = key;
//   }
// }
// console.log(result);

// function* generator() {
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//       yield i;
//     }
//   }
// }
// const x = generator();

// setInterval(() => {
//     if(x.next.done){
//         console.log('l');

//     }else{
//         console.log(x.next().value);

//     }
// }, 1000);

// let obj = {
//   name: "Sanooj",
//   age: 22,
// };

// function A(a, b) {
//   console.log(`my name is ${this.name},${a},${b}`);
// }

// A.apply(obj,['sanoooj','akillllllll']);
