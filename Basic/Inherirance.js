class Car{
  constructor(brand){
    this.carname = brand;
  }
  present(){
    return 'I have a' + this.carname;
  }
}

class Model extends Car{
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show(){
    return this.present() + 'it is a' + this.model;
  } 
}

let myCar = new Model("Ford",'Mustang');
console.log(myCar);

function Person(name){
  this.name = name || "LEE";
}

Person.prototype.getName = function(){
  return this.name;
}

function Me(name){}
Me.prototype = new Person();

let lee = new Me();

console.log(lee.getName());