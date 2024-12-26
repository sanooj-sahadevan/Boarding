// // Give the non-repeating string using hashtable.
// let a = "helloworlddytttt";
// //  Output : "helloworlddyttt"

// let f = {};
// let x = [],
//   y = 0;
// for (let i = 0; i < a.length; i++) {
//   f[a[i]] = 0;
// }

// for (let i = 0; i < a.length; i++) {
//   f[a[i]]++;
// }
// for (let key in f) {
//   if (f[key] == 1) {
//     x.push(key);
//   }
// }
// let largest = 0;
// for (let key in f) {
//   if (f[key] > largest) {
//     largest = f[key];
//     y = key;
//   }
// }

// console.log(x);
// console.log(largest);
// console.log(y);

let a = [3, 2, 5, 7, 8, 1, 9];

// function merge(a) {
//   if (a.length < 2) return a;
//   let mid = Math.floor(a.length / 2)
//   let start = a.slice(0, mid);
//   let end = a.slice(mid);
//   return mergesort(merge(start), merge(end));
// }

// function mergesort(start, end) {
//   let sorted = [];
//   while (start.length && end.length) {
//     if (start[0] <= end[0]) {
//       sorted.push(start.shift());
//     } else {
//       sorted.push(end.shift());
//     }
//   }
//   return [...sorted, ...start,...end];
// }

// console.log(merge(a));

// function quick(a) {
//   if (a.length<2) return a;

//   let pivot = a[a.length - 1];
//   let start = [];
//   let end = [];

//   for (let i = 0; i < a.length - 1; i++) {
//     if (pivot > a[i]) {
//       start.push(a[i]);
//     } else {
//       end.push(a[i]);
//     }
//   }
//   return [...quick(start), pivot, ...quick(end)];
// }
// console.log(quick(a));

// function buble(a) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < a.length; i++) {
//       if (a[i]< a[i + 1]) {
//         let temp = a[i];
//         a[i] = a[i + 1];
//         a[i + 1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap);
//   return a
// }

// console.log(buble(a));
