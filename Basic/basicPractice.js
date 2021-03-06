const str = "Please locate where 'locate' occurs!";
const last = str.lastIndexOf("locate");
console.log(last);
// last locate

const search = str.search("locate");
console.log(search);
//first locate

const slice = str.slice(-36,-29);
console.log(slice);
// slice can have negative values

const substr = str.substring(0,7);
console.log(substr);
// substr can't have negative values

const replace = str.replace("Please","LEE");
console.log(replace);
//replace

const split = str.split("");
console.log(split);
// split and convert array

const numObj = new Number(123);
// it's a object

const x = 9.56646;
console.log(x.toFixed(4));
// round up the decimal number

// If you use named indexes, JavaScript will redefine the array to a standard object.
// After that, some array methods and properties will produce incorrect results.



const array = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof array);
console.log(Array.isArray(array));
console.log(array instanceof Array);
// check array



console.log(array.join(` LEE `));
// add each elements in array



// pop(),push()  & shift(),unshift()
delete array[0];
console.log(array);
//delete array



const array2 = ["Strawberry", "Melon", "Pear"];
const array3 = ["plum", "peach", "grape"]
const concate = array.concat(array2,array3);
console.log(concate.slice(2,8));
// concatenate array



const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort((a,b)=>{return a - b})); 
console.log(points.sort(function(a, b){return b - a}));
//numeric sort



let i,j,k;
for(i=points.length-1; i>0; i--){
  j = Math.floor(Math.random() * i);
  k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);

console.log(points.sort(function(a, b){return 0.5 - Math.random()})); 
//random Sorting an Array in Random Order
//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
//Math.floor(x) returns the value of x rounded down to its nearest integer:



let txt = "";
let number = [10,20,30,40,50];
number.forEach( value =>{
  txt = `${txt}  ${value}`;
  console.log(txt);
});
//for each iteration



let txt1 = "";
number.map( value =>{
  txt1 = `${txt1}  ${value}`;
  console.log(txt1);
});
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
//map iteration



let txt2 = "";
for(let z in number){
  txt2 = number[z];
  console.log(txt2);
};
//for in iteration 
//The JavaScript for/in statement loops through the properties of an Object
//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.



let txt3 = "";
for(let z1 of number){
  console.log(z1);
}
//for of iteration



const sum = number.reduceRight(myfunction, 23);
function myfunction(total,value){
  return total + value;
}
console.log(sum);
// reduceright 



const every = number.every(value=>{
  return value > 10;
});
console.log(every);
// The every() method check if all array values pass a test.



const some = number.some(value=>{
  return value >10;
});
console.log(some);
//The some() method check if some array values pass a test.



const date = new Date();
console.log(date.getFullYear());
date.setFullYear(2021,1,03); // mongth: 0 = Jan, 1 = Feb
console.log(date);
// Date



// debugger; 
//If no debugging is available, the debugger statement has no effect.



console.log(`Math.ceil`,Math.ceil(4.1));
console.log(`Math.floor`,Math.floor(4.9));
console.log(`Math.trunc`,Math.trunc(4.9));
console.log(`Math.sign`,Math.sign(-4.9));
console.log(`Math.sign`,Math.sign(4.9));
console.log(`Math.sqrt`,Math.sqrt(4.9));
console.log(`Math.abs`,Math.abs(-4.9));
console.log(Math.min(1,2,3,4,5,6,7));
console.log(Math.max(1,2,3,4,5,6,7));
console.log(Math.floor(Math.random() * 100) + 1);
// Math



// A RangeError is thrown if you use a number that is outside the range of legal values.
// A ReferenceError is thrown if you use (reference) a variable that has not been declared
// A SyntaxError is thrown if you try to evaluate code with a syntax error.
// A TypeError is thrown if you use a value that is outside the range of expected types
// A URIError is thrown if you use illegal characters in a URI function
// error types



//The JavaScript this keyword refers to the object it belongs to
let person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

console.log(this);

console.log(function adg(){return this;});




var xx = 0.1;
var yy = 0.2;
var zz = xx + yy;
console.log(zz);
// float needs multifly and divide like var z = (x * 10 + y * 10) / 10;



//JS performance
              // var i;
              // var l = arr.length;
              // for (i = 0; i < l; i++) {
              // }
// Statements or assignments that can be placed outside the loop will make the loop run faster.



// Reduce DOM Access
// Accessing the HTML DOM is very slow, compared to other JavaScript statements.
// If you expect to access a DOM element several times, access it once, and use it as a local variable.



        // document.getElementById("demo").innerHTML = firstName + " " + lastName;
// Avoid Unnecessary Variables



//If you access it without () in object method, it will return the function definition



const john = {name:"John", age:30, city:"New York"};
const lpo = Object.values(john); // convert to array



function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};//  prototype property allows you to add new properties and new methods to object constructors


//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);

async function hoho (){
  let leePromise = new Promise((resolve, reject)=>{
    let a =1;
    if(a==10){
      resolve(console.log("HOHOHOHO"));
    }else{
      resolve(console.log("ohohohoho"));
    }
  });
}
hoho();

//The await keyword can only be used inside an async function.
// async makes a function return a Promise
// await makes a function wait for a Promise

//The onload and onunload events can be used to deal with cookies.

//The addEventListener() method allows you 
//to add many events to the same element, without overwriting existing events:

console.log(document.getElementById("id02").nodeName); 

// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.

//                           A node list is not an array!
// You can loop through the node list and refer to its nodes like an array.
// However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.

console.log(navigator.appVersion); 
console.log(navigator.platform);
console.log(navigator.language);
console.log(navigator.onLine);
console.log("lee LEE lee LEE \nlee LEE lee");

// cookie 

//NULL TYPE----------------------------------------------------------------------------------------------------------------
var nullCheck = null;  return type OBJECT
console.log(typeof nullCheck === null); // false
console.log(nullCheck === null); // true
//DELETE---------------------------------------------------------------------------------------------------------------
var foo = {
  name: 'foo',
  nickname: 'pangyo'
};

delete foo;   // DELETE ONLY CAN DELETE PROPERTY LIKE foo.name
console.log(foo); // {name: "foo", nickname: "pangyo"}
//HOW TO CHECK ARRAY AND OBJECT----------------------------------------------------------------------------------------------------------------
var arr = [];
var obj = {};

arr.constructor.name;  // "Array"
obj.constructor.name; // "Object"
//ARRAY DELETE & SPLICE----------------------------------------------------------------------------------------------------------------
var arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, undefined ?? 1, 3]

var arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr); // [1, 3]
//TYPE OPERATOR----------------------------------------------------------------------------------------------------------------
console.log(typeof undefined); // undefined
console.log(typeof nullValue); // object
console.log(typeof arr); // object (
console.log(typeof func); // function
//FUNCTION LENGTH----------------------------------------------------------------------------------------------------------------
function func1(a) { return a; }
function func2(a, b) { return a + b; }
function func3(a, b, c) { return a + b + c; }

console.log('func1 length : ' + func1.length); // func1 length : 1
console.log('func2 length : ' + func2.length); // func2 length : 2
console.log('func3 length : ' + func3.length); // func3 length : 3
//INNER FUNCTION----------------------------------------------------------------------------------------------------------------
function parent() {
  var a = 10;
  var b = 20;

  function child() {
    var b = 30;
    console.log(a);
    console.log(b);
  }
  child();
}
parent(); // 10, 30
child(); // child is not defined
//PROTOTYPE CHAINING----------------------------------------------------------------------------------------------------------------
var obj = {
  name: 'captain',
  printName: function () {
    console.log(this.name);
  }
};
obj.printName(); // 'captain'
obj.hasOwnProperty('name'); // true
obj.hasOwnProperty('city'); // false
//PROTOTYPE REDEFINE----------------------------------------------------------------------------------------------------------------
String.prototype.printText = function (text) {
  console.log("Print this text out " + text);
};
var name = "captain";
name.printText('pangyo'); // 'Print this text out pangyo'
//INSTANCE FUNCTION---------------------------------------------------------------------------------------------------------------
(function (name) {
  console.log('This is the immediate function : ' + name);
})('foo');
//CLOSURE----------------------------------------------------------------------------------------------------------------
function parent() {
  var a = 'Parent is done';
  function child() {
    console.log(a);
  }
  return child;
}
var closure = parent();
closure();
//ASYNCHRONUOUS----------------------------------------------------------------------------------------------------------------
var i;
for (i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 5, 5, 5, 5, 5
  }, 1000);
}
//ARGUMENT----------------------------------------------------------------------------------------------------------------
function add(a, b) {
  console.dir(arguments);
}
console.log(add(1)); // Arguments(1), 0: 1
console.log(add(1, 2)); // Arguments(2), 0: 1, 1: 2
console.log(add(1, 2, 3)); // Arguments(3), 0: 1, 1: 2, 2: 3
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------



