const maarvel_hero = ["thor" , "Ironman" , "spiderman"]
const dc_hero = ["superman" , " flask " ,"batman"]

maarvel_hero.push(dc_hero); // not an efficient way for merging two array
console.log(maarvel_hero); // o/p - [ 'thor', 'Ironman', 'spiderman', [ 'superman', ' flask ', 'batman' ] ]
console.log(maarvel_hero[3][1]); // flask

const all_hero = maarvel_hero.concat(dc_hero) 
console.log(maarvel_hero); // [ 'thor', 'Ironman', 'spiderman',  'superman', ' flask ', 'batman' ]

const all_new_hero = [...maarvel_hero , ...dc_hero]
console.log(all_new_hero); //['thor', 'Ironman', 'spiderman',  'superman', ' flask ', 'batman' ]

const another_arr = [1 , 2 ,3 ,[4 , 5, 6] , 7 ,[6 ,7 ,[4 ,5]]]
const real_another_arr = another_arr.flat(Infinity) 
console.log(real_another_arr); /*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */

console.log(Array.isArray("Mousam")); //false
console.log(Array.from("Mousam")); // [ 'M', 'o', 'u', 's', 'a', 'm' ]
console.log(Array.from({name : "mousam"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3)); // [ 100, 200, 300 ]









