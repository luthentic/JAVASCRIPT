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

