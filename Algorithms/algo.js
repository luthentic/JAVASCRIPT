function soultion1(a,b){
  return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][new Date(2016,a-1,b).getDay()]
}

function solution2(c){
  return c.substr(Math.ceil(c.length / 2) - 1, c.length % 2 === 0 ? 2:1)
}

function solution3(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}