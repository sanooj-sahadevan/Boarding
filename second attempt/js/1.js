// let a = [1, 1, 1, 2, 2, 3, 3, 3, 3, 6, 6, 8, 6, 7, 7, 7, 7, 7, 2, 8, , 8, 8];

// // least occurence odd number /even number : more than one(some conditions)
// let f = {},
//   x = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     x.push(a[i]);
//   }
// }
// for (let i = 0; i < x.length; i++) {
//   f[x[i]] = (f[x[i]] || 0) + 1;
// }

// let smallest = Infinity;
// let result = [];
// for (let key in f) {
//   if (f[key] <= smallest) {
//     smallest = f[key];
//     // result = Number(key);
//     result.push(Number(key))
//   }
// }
// console.log(f);

// console.log(result);

// clousure

// function A(){
//     let ctr = 0

//     return function (){
//         return ctr++
//     }
// }

// let a = A()
// console.log(a());
// console.log(a());
// console.log(a());

//callback

// function a(callback) {
//   callback(function c() {
//     console.log("third");
//   });
//   console.log("first");
// }

// a(function b(callback) {
//   callback();
//   console.log("second");
// });

// function a(callback) {
//   return new Promise((resolve) => {
//     callback(() => {
//       console.log("third");
//       resolve()
//     });
//     console.log("first");
//   });
// }

// function b(callback) {
//     return new Promise((resolve)=>{
//         resolve()
//         callback();
//   console.log("second");
//     })

// }

// a(b).then(()=>{
//     console.log('okkkkk');

// }).catch(()=>{
//     console.log('pooi');

// })

// async function a(callback) {
//   await callback(function c() {
//     console.log("third");
//   });
//   console.log("first");
// }

//  async function b(callback) {
//  await callback();
//   console.log("second");
// }

// a(b)

//generator function (generate even numbers endlessly)

// function* generate() {
//     let i = 0
//   while (true) {
//     if (i % 2 == 0) {
//       yield i;
//     }
//     i++;
//   }
// }

// let x = generate();
// setInterval(() => {
//   console.log(x.next().value);
// },1000);

// (function(a,b){
//     console.log(a+b);

// })(2,2)

// deepcopy- deep clone

// let a = 10;
// let b = a;
// b = 100000000000;
// console.log(a, b);

// let x = [1, 2, 3, 4, 5];
// // let y = JSON.parse(JSON.stringify(x));
// let y = structuredClone(x)
// x[0] = 10000000000;
// console.log(x, y);

//promise.all, Promise.all settled,  promise.race, promise.any

// let x = 1
// let y  = 1

// const promise = new Promise((resolve,reject)=>{
//     if(x==y){
//         resolve('sucess')
//     }else{
//         reject('failur')
//     }
// }).then((a)=>{
//    console.log(a);

// }).catch((a)=>{
//  console.log(a);

// })

// const promise1 = new Promise((resolve, reject) => {
// //   resolve("sucesss1");
//   reject('failur')
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve("sucesss2");
//   // reject('failur')
// });
// const promise3 = new Promise((resolve, reject) => {
// //   resolve("sucesss");
//    reject('failur3')
// });
// const promise4 = new Promise((resolve, reject) => {
//   resolve("sucesss4");
//   // reject('failur')
// });

// // let promise = Promise.allSettled([promise1, promise2, promise3, promise4]);
// let promise = Promise.any([promise1, promise2, promise3, promise4])
// promise
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((a) => {
//     console.log(a);
//   });



// function A(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 console.log(a+b+c+d);
                
//             }
//         }
//     }
// }
// A(1)(2)(2)(1)
