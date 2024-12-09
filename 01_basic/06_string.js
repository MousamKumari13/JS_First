const name = "mousam"
const repoccnt = 5


console.log(name + repoccnt + "value"); //mousam5value but this is not the right way to concate string this is old way

console.log(`hello my name is ${name}and my repocount is ${repoccnt}`); // this is the modern way which we called as string intpolation
 // output - hello my name is mousamand my repocount is 5
const gamename = new String('Mousam') // object
console.log(gamename); //[String: 'Mousam']

console.log(gamename[0]); // M
console.log(gamename.__proto__); //{}
console.log(gamename.length); //6
console.log(gamename.toLocaleUpperCase()); //MOUSAM
console.log(gamename.charAt(4)); //a
console.log(gamename.indexOf('s')); //3

const newstring = gamename.substring(1 , 3)
console.log(newstring);//ou

const anotherstring = gamename.slice(-5 , 3)
console.log(anotherstring); //ou

const newstringone = "    Sonu  " //    Sonu
console.log(newstringone);
console.log(newstringone.trim());//Sonu

const url = "https://ms.com/mousam%20sharma"

console.log(url.replace('%20' , '-')); // https://ms.com/mousam-sharma
console.log((url.includes('rakhi'))); // false

const newname = "Mousam-Rakhi-Sonu" //[ 'Mousam', 'Rakhi', 'Sonu' ]
console.log(newname.split('-'));



















