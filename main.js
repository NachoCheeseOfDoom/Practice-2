let person = {
  name: 'Ignacio',
  age: 23,
  country: 'Mexico'
}

function logData() {
  return `${person.name} is ${person.age} years old and lives in ${person.country}`;
}

console.log(logData());