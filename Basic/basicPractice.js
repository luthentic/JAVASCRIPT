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
// substr can't

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

const sum = number.reduceRight(myfunction, 23);
function myfunction(total,value){
  return total + value;
}
console.log(sum);
// reduceright iteration

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


