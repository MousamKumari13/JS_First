let mydate = new Date()

console.log(mydate); //2024-12-10T13:52:23.194Z
console.log(mydate.toString());// Tue Dec 10 2024 13:52:23 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString()); // Tue Dec 10 2024
console.log(mydate.toLocaleDateString()); // 12/10/2024
console.log(mydate.toISOString()); // 2024-12-10T13:52:23.194Z
console.log(mydate.toJSON()); // 2024-12-10T13:52:23.194Z
console.log(mydate.toLocaleString()); // 12/10/2024, 1:52:23 PM

console.log(typeof mydate); // object

let mycreatdate = new Date(2025 , 0 , 1)
console.log(mycreatdate.toDateString());  //Wed Jan 01 2025

let mycreat =  new Date("01-02-2025");
console.log(mycreat.toLocaleString); //01/02/2025

let mytimeStamp = Date.now() 
console.log(mytimeStamp); // 1733932824154
console.log(mycreat.getTime()); // 1735776000000
console.log(Math.floor(Date.now() / 1000)); // 1733932824

let newdate = new Date;
console.log(newdate); // 2024-12-11T16:00:24.154Z
console.log(newdate.getMonth() + 1); // we are adding 1 because in js initially month will start from 0 //output-12
console.log(newdate.getDate());//11

newdate.toLocaleString('default' , { // we also create an object here..
    weekday : "long"
})















