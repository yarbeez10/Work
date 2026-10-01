const number = 100

console.log(number);

const newNumber = Number(100)
console.log(newNumber);
console.log(typeof(newNumber));

console.log(newNumber.toString().length)
console.log(newNumber.toFixed(2))

const Num = 123.413

console.log(Num.toFixed(2));
console.log(Num.toPrecision(4));


//******************************************Maths******************************************

console.log(Math);
console.log(Math.PI);
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,5,6,1,7,5,2));
console.log(Math.max(4,5,6,1,7,5,2));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 6) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
