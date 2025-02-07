// let arr = [
//   [1, 2],
//   [2, 4, [3, 8]],
//   [5, 8],
// ];

// let x = [];
// for(let i =0;i<arr.length;i++){
//     for(let j =0;j<arr[i].length;j++){
//         x.push(arr[i][j])
//     }
// }
// console.log(x);

// function rec(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       rec(arr[i]);
//     }else{
//         x.push(arr[i]);
//     }

//   }
// }

// rec(arr);
// console.log(x);

//reverse the array and elements of the array
// let arr = ["hey", "say", "my", "name"];
// //[ 'eman', 'ym', 'yas', 'yeh' ]

// arr = arr.reverse();

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].split("").reverse().join("");
// }

// console.log(arr);


// let arr = [2,9, 4, 6, 7, 9, 8, 100];

// let laragest = 0,
//   second = 0,
//   third = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (laragest < arr[i]) {
//     third = second;
//     second = laragest;
//     laragest = arr[i];
//   } else if (laragest > second && second < arr[i]) {
//     second = arr[i];
//   } else if (second > third && third < arr[i]) {
//     third = arr[i];
//   }
// }

// console.log(laragest);
// console.log(second);
// console.log(third);

