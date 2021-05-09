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

