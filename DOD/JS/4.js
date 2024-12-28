// function handle(){
//     const name  = document.getElementById('id').value
//     console.log(name);
//     if(name){
//         document.querySelector('h1').innerText = `hello ${name}`
//     }

// }

// function button(){
//     const button = document.getElementById('button')
//     console.log(button);
//     if(button){
//         button.innerText = 'MY NAME IS HEISNBERG'
//     }
// }

// calculate sum of 3 different function with 3 different execution time returns 3 different number
// async function a() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(5), 1000); // Returns 5 after 1 second
//     });
// }

// async function b() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(10), 2000); // Returns 10 after 2 seconds
//     });
// }

// async function c() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(15), 1500); // Returns 15 after 1.5 seconds
//     });
// }
// async function A() {
//    const A =  await  a()
//    const B  = await  b()
//    const C   =await  c()

//     return A+B+C
// }

// A().then((a)=>{
//     console.log(a);

// })

// let arr  = [1,2,3,4,5,]

// let x = arr.every(a=>a==5)
// console.log(x);

// let obj  = {
//     name:"SANOOJ"
// }

// function A(a){
//     console.log(`my name is ${this.name},${a}`);

// }

// // A.call(obj)
// //A.apply(obj,['pkd'])
// let x = A.bind(obj,['pkd'])
// x()

// const x = [1,2,3,4,5,3]
// let y =  structuredClone(x)
// x[0] = 100
// console.log(x);
// console.log(y);

// let a = 100
// let b = a
// b=10
// console.log(a);
// console.log(b);

// -reverse the array and elements of the array

// let a = "say my name";
// //a = a.split(" ");
// let x = [];
// let word = "";
// for (let i = a.length - 1; i >= 0; i--) {
//   if (a[i] !== " ") {
//     word += a[i];
//   } else {
//     x.push(word);
//     word = "";
//   }
// }
// x.push(word);

// console.log(x);

// for (let i = a.length - 1; i >= 0; i--) {
//   let str = "";
//   for (j = a[i].length - 1; j >= 0; j--) {
//     str += a[i][j]
//   }
//   x.push(str);
// }
// console.log(x);

// -find the second longest word in sentence without split

// let a = "my name is sanooj";
// let x = [];
// let y = "";

// for (let i = 0; i < a.length; i++) {
//   if (a[i] !== " ") {
//     y += a[i];
//   } else {
//     x.push(y);
//     y = "";
//   }
// }
// x.push(y);

// let largest = "",
//   second = "";

// for (let i = 0; i < x.length; i++) {
//   if (largest.length < x[i].length) {
//     second = largest;
//     largest = x[i];
//   } else if (x[i].length > second.length && x[i] !== largest) {
//     second = x[i];
//   }
// }

// console.log(largest);
// console.log(second, "-");

// -flatten the array

// let arr = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [
//     [1, 2, 3],
//     [2, 3, 4],
//   ],
// ];

// let x = [];
// function A(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       A(arr[i]);
//     } else {
//       x.push(arr[i]);
//     }
//   }
//   return x
// }

// console.log(A(arr));

// Practical :  Write a code for closure.
// function A() {
//   let ctr = 0;

//   return function () {
//     ctr++;
//     return ctr;
//   };
// }

// Write the syntax for callback hell.

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 2000);
// }, 1000);

// function greet(name, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }, 1000);
// }

// greet("Alice", () => {
//   console.log("Greeted Alice!");
// });

// function greet(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Hello, ${name}!`);
//       resolve();
//     }, 1000);
//   });
// }

// greet("Alice")
//   .then(() => {
//     console.log("Greeted Alice!");
//   })
//   .catch((err) => console.error(err));

//given student object, replace all values with your name

// let obj = {
//   name: "sanooj",
//   age: 22,
//   pkd: "pKD",
// };

// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     obj[key] = "sanooj";
//   }
// }
// console.log(obj);

// let a = [2, 4, 1, 3, 7, 6, 5, 9, 8];
// 2,
// 4,2
// 1,4,2
// 3,1,4,2

// for (let i = 0; i < a.length; i++) {
//   let str = "";9
//   for (j = i; j >= 0; j--) {
//     str += a[i];
//   }
//   console.log(str);
  
// }
