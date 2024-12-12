// remove adjacent odd elements from array - not completed,

// let arr = [1, 3, 4, 2, 5, 7, 3, 8];
// //[4, 8]
// let a = [];
// let result = arr.filter((nums, i, arr) => {
//   if (nums % 2 == 1) {
//     return !(arr[i + 1] % 2 == 1 || arr[i - 1] % 2 == 1);
//   }
//   return nums
// });
// console.log(result);

// const obj = { a: 1, b: 2, c: 3 };
// // { a: 1, b: 2 }

// let a = Object.entries(obj)
// a.pop()
// console.log(Object.fromEntries(a));

// how to check whether the given object is empty or not?,

// const obj1 = {};
// const obj2 = { a: 1, b: 2 };

// let res = Object.keys(obj2);
// res.length == 0 ? console.log("emp") : console.log(res.length);

const obj = [
  { af: 4, pol: [5, 34, 5] },
  { af: 4, pol: [5, 34, 5] },
  { af: 4, pol: [5, 34, 5] },
  { af: 4, pol: [5, 34, 5] },
];
// Retrieve all af values from the array.
// for (let key of obj) {
//   for (let keys in key) {
//     if (keys == "af") {
//       console.log(key[keys]);
//     }
//   }
// }

// for (let key of obj) {
//   for (let keys in key) {
//     if (keys == "pol") {
//       console.log(key[keys]);
//     }
//   }
// }
//Calculate the total sum of all af values.

// let sum = 0;
// for (let key of obj) {
//   for (let keys in key) {
//     if (keys == "af") {
//       sum += key[keys];
//     }
//   }
// }
// console.log(sum);

// let arr = [];
// for (let key of obj) {
//   for (let keys in key) {
//     if (keys == "pol") {
//       arr.push(key[[keys]]);
//     }
//   }
// }
// arr = arr.flat(Infinity)
// console.log(Math.max(...arr));

//Check if all objects in the array have af equal to 4.
// let c = 0,ctr = 0
// for (let keys of obj) {
//   for (let key in keys) {
//     if (key === "af") {
//         c++
//       if (keys[key] == 4) {
//         ctr++
//       }
//     }
//   }
// }
// if(ctr===c){
//     console.log(true);
    
// }else{
//     console.log(false);
    
// }

// Flatten all pol arrays into a single array.

let sum  = []
for (let key of obj) {
  for (let keys in key) {
    if (keys == "pol") {
    //   console.log(key[keys]);
sum.push(key[keys]  )
    }
  }
}