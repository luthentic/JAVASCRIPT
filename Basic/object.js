console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

let user = { 
  key:"a",
};

console.log("age" in user);


let codes = {
  "5": "LEE5",
  "4": "LEE4",
  "2": "LEE2",
  "3": "LEE3",
  "1": "LEE1",
};

let codesArray = [ "LEE4", "LEE5", "LEE2", "LEE3", "LEE1",];

for(let code in codes){
  console.log(code);
}

codesArray.forEach((element)=>{
  console.log(element);
});

function User(name){
  this.name = name;
  this.isAdmin = false;
}

let user = new User("LEE");

console.log(user.name);
console.log(user.isAdmin);

let user1 = new function(){
  this.name = "John";
  this.isAdmin = false;
};

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1.description);

console.log(id1 === id2);


function myFun(a, b, ...restOb){
  console.log("a", a);
  console.log("b", b);
  console.log("rest", restOb);
}

myFun("One", "Two", "Three", "Four", "Five");


function fucLen(a, b, ...arg){
  console.log(arg.length);
}

fucLen(1,2,3,4,5,6,7,8);


function multifly(multi, ...arg){
  return arg.map((element)=>{
    return multi * element;
  });
}

let mulit = multifly(2, 15, 20, 30, 40);
console.log(mulit);