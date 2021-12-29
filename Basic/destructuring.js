const fruit = ['orange', 'banana', 'lemon'];
const people = ['lee', 'kim', 'bob', 'kelly', 'simon'];

const fruit1 = fruit[0];
const fruit2 = fruit[1];
const fruit3 = fruit[2];

console.log(fruit1, fruit2, fruit3);

const [lee, kim, simon] = people;
const [lee2, , bob2, ,simon2,] = people;
const [lee1, kim1, bob1, kelly1, simon1] = people;

console.log(lee, kim, simon);

console.log(lee1,bob1,kelly1);

console.log(lee2, bob2, simon2);

////////////////////////////////////////

const bob = {
  first: 'bob',
  last: 'sander',
  city: 'chicago',
  sibiling: {
    sister: 'jain',
  },
};

const {first, last:lol, city, sibiling:{sister:secondSister}} = bob;
console.log(first, lol, city, secondSister);

function printPerson({first, last, city, sibiling:{sister}}){
  console.log(first, last, city, sister);
}

printPerson(bob);
