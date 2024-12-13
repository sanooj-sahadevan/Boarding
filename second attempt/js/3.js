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
