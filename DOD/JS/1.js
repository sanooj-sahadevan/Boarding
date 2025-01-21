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

// function falatten(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       falatten(arr[i]);
//     } else {
//       x.push(arr[i]);
//     }
//   }
// }

// falatten(arr);
// console.log(x);

//reverse the array and elements of the array
// let arr = ["hey", "say", "my", "name"];
// let x = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   let str = "";

//    for (let j = arr[i].length - 1; j >= 0; j--) {
//      str += arr[i]
//    }
//   x.push(str);
// }

// console.log(x);

// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

// let f = {};
// let x = [];

// arr = Array.from(new Set(arr));
// let largest = 0;second = 0
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     second = largest
//     largest = arr[i];
//   }else if(largest>second && arr[i]>sec ond){
//     second = arr[i]
//   }
// }

// console.log(largest);
// console.log(second);


let arr = [[1, [2, [3, [4]]]]];
let x = [];
function rec(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      
      rec(arr[i]);
    } else {
      x.push(arr[i]);
    }
  }
}

rec(arr);

  