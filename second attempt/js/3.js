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

// let stack = [2, 1, 4, 3, 7, 6, 4, 5];

// function sort(stack) {
//   let tempStack = [];

//   while (stack.length) {
//     let top = stack.pop();
//     while (tempStack.length > 0 && tempStack[tempStack.length - 1] > top) {
//       stack.push(tempStack.pop());
//     }
//     tempStack.push(top);
//   }
//   return tempStack;
// }

// console.log(sort(stack));

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
let arr = [123, "hello", "world"];
// [ "dlrow", "olleh", 321 ]

let x = arr.reverse();
console.log(x);

let y = [];
for (let i = 0; i < x.length; i++) {
  for (j = 0; j < x[i].length; j++) {
    y.push(x[j]);
  }
}
console.log(y);
