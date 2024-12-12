//call
// let obj = {
//   name: "sanooj",
//   age: 22,
// };

// function A() {
//   console.log(`say my name ${this.name}`);
// }

// A.call(obj)

// APPLY

// let obj = {
//   name: "suresh",
//   age: 21,
// };

// function A(a, b) {
//   console.log(`say my name ${this.name} ,I am ${a} from ${b}`);
// }

// A.apply(obj,[22,'PKD'])

//BIND

// let obj = {
//   name: "Madhav",
//   age: 21,
// };

// function A() {
//   console.log(`say my name ${this.name}`);
// }

// const x = A.bind(obj)
// x()

// const obj = {
//     name:'sanooj',
//     age:22,
//     address:{
//         city:'PKD',
//         state:"Kerala"
//     }
// }

// const x = JSON.stringify(obj)
// const y = JSON.parse(x)
// console.log(typeof y);

//  console.log( typeof x);

//    set (), map()

// let a = 10;
// let arr = [1, 2, 3, 4, 5];
// let obj  = {name:'sanooj',age:22}
// let b = 10
// let c = 100

// const x = new WeakSet();             wecan add set in all types but in the WEEKSET only we can add the non primiyive data atypes
// x.add(a);
// x.add(c)
// x.add(arr);
// x.add(obj)
// console.log(x);

/*
Use WeakSet when you need to track object references without preventing them from being garbage collected. 
It's useful in cases like DOM elements or caching where objects might get removed dynamically.
Objects in a WeakSet are held as weak references, 
which means they are eligible for garbage collection if there are no other strong references to the objects.

Set keeps strong references to its elements, 
which means objects in a Set are not eligible for garbage collection as long as they remain in the Set.

*/

// MAP()

// let a = [1, 2, 3, 4, 5, 5];
// let b = 100;
// let c = { obj: "name", age: 22 };

// let x = new Map()
// x.set('arr',a);
// x.set('b',b)
// x.set("obj",c);

// console.log(x);

// let a = [1, 2, 3, 4, 5, 5];
// let b = 100;
// let c = { obj: "name", age: 22 };

// let x = new WeakMap()
// x.set('arr',a);
// x.set('b',b)
// x.set("obj",c);

// console.log(x);

// let a = 10
// let b = 100

// let x = a>b?a:b
// console.log(x);

// second largest

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 11];

// let largest = 0,
//   second = 0;third = 0
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     third = second
//     second = largest;
//     largest = arr[i];
//   } else if (arr[i] > second && arr[i] < largest) {
//     second = arr[i];
//   }else if( arr[i] < second &&   arr[i]>third)
//     third  = arr[i]
// }
// console.log(largest);
// console.log(second);
// console.log(third);

// Find the second largest even number in an array without sorting

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 11];
// let largest = 0,second = 0
// let x = arr.reduce((acc, curr) => {
//   if (curr % 2 == 0) {
//     if (curr > largest) {
//         second = largest
//       largest = curr;
//     }else if(curr<largest && curr>second){
//         second = curr
//     }
//   }
// });

// console.log(largest);
// console.log(second);

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12];

// let x = arr.filter((curr, ind) => curr % 3 !== 0);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 == 0) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
// console.log(x);

// let a = [2, 4, 1, 3, 7, 6, 5, 9, 8];
// 2,
// 4,2
// 1,4,2
// 3,1,4,2

// for (let i = 0; i < a.length; i++) {
//   let str = "";
//   for (let j = i; j >= 0; j--) {
//     str += a[j];
//   }
//   console.log(str);
// }

// subarray with max number elemet with increasing order

// let arr = [2, 8, 4, 5, 6, 12, 3, 7];

// let sum = 0,
//   x = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < arr[i + 1]) {
//     sum += arr[i];
//   } else {
//     sum += arr[i];
//     x.push(sum)
//     sum=0
//   }
// }

// console.log(Math.max(...x));
