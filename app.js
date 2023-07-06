const order1 = new Orders('matite', 1.50, 20);

console.log(order1);
console.log(order1.totalPrice);
console.log(order1.toString());

const person1 = new Person('Damiano', 'Di Lionardo', new Date(1993, 4, 29), 'male');

console.log(person1);

const dob = new Date(1978, 2, 2);
const person2 = new Person('Andrea', 'Asioli', dob, 'male');

console.log(person2);