const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance);// [Number: 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00

const otherno = 23.8966
console.log(otherno.toPrecision(3)); //23.9

const num = 123.8966
console.log(num.toPrecision(3)); // 124

const hundred = 1000000
console.log(hundred.toLocaleString()); // 1,000,000

console.log(hundred.toLocaleString('en-IN')); //10,00,000

//+++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4 , 2 , 3 , 6));
console.log(Math.max(4 , 2 , 3 , 6));


console.log(Math.random()); //this gives value between 0 and 1
console.log((Math.random() * 10) + 1); // adding 1 for avoiding 0 as output
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
















