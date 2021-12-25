const people = [
  {
    name: 'LEE',
    age: 20,
    postition: 'student'
  },
  {
    name: 'KIM',
    age: 25,
    postition: 'programmer'
  },
  {
    name: 'PARK',
    age: 23,
    postition: 'teacher'
  },
  {
    name: 'LEE',
    age: 30,
    postition: 'cashier'
  }
];

const ages = people.map((person)=>{
  console.log(person.name);
  return person.age;
});

const newPeople = people.map((item)=>{
  return {
    firstName: item.name.toLowerCase(),
    twiceAge: item.age * 2
  };
});

console.log(ages);
console.log(newPeople);

const unique = new Set(people.map((item) => item.name));
const uniqueArray = [`Array`, ...new Set(people.map((item) => item.name))];
console.log(unique);
console.log(uniqueArray);