// // import express from "express";
// import { createServer } from "http";

const { log } = require("console");

// // const app = express();

// // app
// //   .use("/", (req, res) => {
// //     const query = req.query.id;
// //     res.send(`ok ${query}`);
// //   })
// //   .listen(3000);

// // app
// //   .use("/user/:id", (req, res) => {
// //     const { id } = req.params;
// //     res.send(`ok ${id}`);
// //   })
// //   .listen(3000);

// createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/plain" });
//   res.write("ok");
//   res.write("ok");
//   res.end();
// }).listen(3000);

let a = [1, 2, 34, 100, 2, 3, 4, 5, 6, 7, 48, 8];
// let largest = 0,
//   second = 0;
// for (let i = 0; i < a.length; i++) {
//   if (largest < a[i]) {
//     second = largest;
//     largest = a[i];
//   } else if (largest < second && second < a[i]) {
//     second = a[i];
//   }
// }
// console.log(largest, second);
let res = [];
let x = a.filter((curr, ind) => {
  let y = a.indexOf(curr) === ind;
  res.push(y);
});
console.log(res);
