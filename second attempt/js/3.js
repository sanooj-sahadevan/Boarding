// find thelargest substring without vowels

// let a = "qwerrtyuiop";
// a = a.split("");
// let vow = ["a", "e", "i", "o", "u"];

// let x = [];
// let str = "";
// for (let i = 0; i < a.length; i++) {
//   if (!vow.includes(a[i])) {
//     str += a[i];
//   } else {
//     x.push(str);
//     str = "";
//   }
// }

// let y = x.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));
// console.log(y);

// let str = 'helloworld'
// // let x = str.split('o').join('')
// // console.log(x);

// let x = str.replaceAll('o','')
// console.log(x);

//find the second longest word in sentence

// let a = "my name is sanooj";

// a = a.split(" ");
// let x = a.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));
// console.log(x);

// -flat the array using closures

// let arr = [
//   [1, 2],
//   [2, 4, [3, 8]],
//   [5, 8],
// ];

// let x = [];

// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     if (Array.isArray(arr[i][j])) {
//       x = x.concat(arr[i][j]);
//     } else {
//       x.push(arr[i][j]);
//     }
//   }
// }
// console.log(x);

// reverse the array and elements of the array
// let arr = ["hey", "say", "my", "name"];
// let x = arr.reverse();
// console.log(x);
// let y = [];
// for (let i = 0; i < x.length; i++) {
//   let z = x[i].split("").reverse().join("");
//   y.push(z);
// }
// console.log(y);

// ------------------------------------------------------------------

// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

// let f = {},
//   x = [];

// for (let i = 0; i < arr.length; i++) {
//   f[arr[i]] = 0;
// }

// for (let i = 0; i < arr.length; i++) {
//   f[arr[i]]++;
// }

// let smalles = Infinity;
// let y = 0;

// for (let key in f) {
//   if (smalles > f[key] && f[key] !== 1) {
//     smalles = f[key];
//     y = key;
//   }
// }
// console.log(y);
// console.log(smalles);

// function A(){
//     let ctr = 1
//     return function(){
//        return ctr++
//     }
// }
// let x = A()
// console.log(x());
// console.log(x());
// console.log(x());

// async function A(callback) {
//  await callback();
//   console.log("first");
// }

//  function B() {
//   console.log("second");
// }

// A(B);

//spread, rest --------

// let a   = [ 1,2,3,4,2]
// let b = [2,3,21,1]
// let x = 10

// console.log([...a,...b,10,11,x]);



