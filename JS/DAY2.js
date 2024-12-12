// CLOUSER

/*
feature of the javascript
inner function can acces the outer function is called clouser.even the outer function has finished executing


Data Privacy: encapsulating varibles, make them to private and inaccesible from the gobal scope
mainatin state:Clouse can maintain and update state betwen function
FUnction factores:Event listeners, callback function
Event Handling: 
Curring and HOC
*/

// function ABC() {
//   let ctr = 0;

//   return function () {
//     ctr++;
//     return ctr;
//   };
// }
// const x = ABC();
// console.log(x());
// console.log(x());

//  First-Class Function
/*
Assinged to varibles : function can stire varible like arrays and objects
passed by arguments: Function can be passed as arguments to other function
Return from other functions: Function can return other functions as values
Assigned propertes : Function can have properties and methods, like any object

**/

// What is higher order function ?

/*
takes onr ormore function as argumnt, or 
returns anotehr function as its result
Higher-order functions allow functional programming techniques like map, filter, and reduce, which are widely used in JavaScript.
**/

// callback hell

// function A(B) {
//   B(function C(d) {
//     d();
//     console.log("Third");
//   });
//   console.log("first");
// }

// A(function B(c) {
//   c(function D() {
//     console.log("Fourth");
//   });
//   console.log("Second");
// });

// console.log("Start");

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//       setTimeout(() => {
//         console.log("Step 4");
//         console.log("End");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// convert the calback functiominto promise

// function A() {
//   return new Promise((resolve, reject) => {
//     console.log("first");
//     resolve();
//   });
// }

// function B() {
//   return new Promise((resolve) => {
//     console.log("second");
//     resolve();
//   });
// }

// function C() {
//   return new Promise((resolve) => {
//     console.log("third");
//     resolve();
//   });
// }

// A()
//   .then(() => B())
//   .then(() => C());

// currying
/**
 *
 * paritally aplied
 * event handling
 *
 */

// function Currying(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(Currying(1)(2)(3));

// Practical :  Longest repeating character. Input:   “etrrrtutraaaaa”, Output : "aaaaa"
// let a = "etrrrtutraaaaa";
// a = a.split("");
// let f = {};

// for (let i = 0; i < a.length; i++) {
//   f[a[i]] = 0;
// }

// for (let i = 0; i < a.length; i++) {
//   f[a[i]]++;
// }

// let largest = 0,keys = ''
// for (let key in f) {
//   if (largest < f[key]) {
//     largest = f[key];
//     keys = key
//   }
// }
// console.log(largest);
// console.log(keys);

/*
var = redeclare , re intilize
let  = re initilize, ne declare

const  = no redecalre and no re inilizing

*/

// generator function

// function* generator(){
//     let a = 2
//     yield a
//     yield a*a
//     yield a+1
// }

// const x =  generator()
// console.log(x.next().value);
// console.log(x.next().value);
// console.log(x.next().value);

// print even number  2 - 10

// function* genrator() {
//   let i = 2;
//   while (true) {
//     if (i % 2 == 0) {
//       yield i;

//     }
//     i++
//   }
// }

// const x = genrator();

// setInterval(() => {

//   console.log(x.next().value);

// }, 1000);

//IIFE

// let a  = (function(a,b){
//     return a+b
// })(22,2)

// console.log(a)

// let obj = {
//   name: "suresh",
//   age: 22,
//   greet: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.value);
//   },
// };

// obj.greet()
// obj.arrow()

// shallow copy and deep copy
// let a = [1, 2, 3];
// let b = a;
// a = JSON.parse(JSON.stringify(a))
// a[0] = 100;

// console.log(a);
// console.log(b);
