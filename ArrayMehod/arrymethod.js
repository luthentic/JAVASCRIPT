const items = [
  { name: 'Bike1', price:100},
  { name: 'Bike2', price:500},
  { name: 'Bike3', price:400},
  { name: 'Bike4', price:300},
  { name: 'Bike5', price:200},
  { name: 'Bike6', price:600},
  { name: 'Bike7', price:400},
  { name: 'Bike8', price:700},
  { name: 'Bike9', price:500},
]


const filterItems = items.filter((a) =>{
  return a.price <=400
});
console.log(filterItems);  // filter

const mapp = items.map((b)=>{
  return b.name;
});
console.log(mapp);  // map => name , price 

const findp = items.find((c)=>{
  return c.price == 500;
});
console.log(findp);  // find first item in array 

const hasover100 = items.some((d)=>{
  return d.price >500;
});
console.log(hasover100);  // some => boolean

items.forEach((f) => {
  console.log(f.name);
});

const hasover500 = items.every((g)=>{
  return g.price >500;
});
console.log(hasover500);  // every => boolean

const total = items.reduce((currentTotal, item )=>{
  return item.price + currentTotal;
},0);
console.log(total);

const ppp = [1,2,3,4,5];
const includesingle = ppp.includes(6);
console.log(includesingle);


// ---------------------------------------------This--------------------------------------------------------------- 


// ---------------------------------------------SOCPE--------------------------------------------------------------- 
//  Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function.

//  Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".
// You will learn more about how to use strict mode in a later chapter of this tutorial.
// 1. Global Scope
// 2. Local Scope or Function Scope
// 3. Block Scope   - let, const

//          Nested Scope
// function run() {
//   // "run" function scope
//   const message = 'Run, Forrest, Run!';
//   if (true) {
//     // "if" code block scope
//     const friend = 'Bubba';
//     console.log(message); // 'Run, Forrest, Run!'
//   }

//   console.log(friend); // throws ReferenceError
// }


// Lexical Scope
// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// closure:  is a function having access to the parent scope, even after the parent function has closed. 
// function outer() {
//   var b = 10;
//   var c = 100;
//      function inner() {
          
//            var a = 20; 
//            console.log("a= " + a + " b= " + b);
//            a++;
//            b++;
//       }
//      return inner;
//   }
//   var X = outer();  // outer() invoked the first time
//   var Y = outer();  // outer() invoked the second time
//   //end of outer() function executions
//   X(); // X() invoked the first time
//   X(); // X() invoked the second time
//   X(); // X() invoked the third time
//   Y(); // Y() invoked the first time


// EC : execution Context by JS Engine
// b();
// console.log(a);
// var a = "hi!";
// function b() {
//     console.log("calling function");
// }
// calling function
// undefined

