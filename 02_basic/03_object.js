//singleton
// object.create

//object literals
const mysym = Symbol("key1") // declare symbol
const jsuser = {
    name : "Mousam",
    [mysym] : "mykey1", //using symbol as a key
    "full name" : "Mousam kumari", // we cant access this using dot(.) , for access this we use ["full name"]
    age : 22 ,
    city : "Motihari",
    email : "mousam231@.com",
    islogin : false,
    lastloginday : ["Monday" , " Saturday"]

}

console.log(jsuser.email); // mousam231@.com
console.log(jsuser["email"]); // mousam231@.com
console.log(jsuser["full name"]); // Mousam kumari

console.log(jsuser[mysym]); // mykey1

jsuser.email = "mousam@google.com"
// Object.freeze(jsuser) // we cant change the value after using freez mathod
jsuser.email = "mousam@microsoft.com" //the mail cant be changed
console.log(jsuser); /* {
    name: 'Mousam',
    'full name': 'Mousam kumari',
    age: 22,
    city: 'Motihari',
    email: 'mousam@google.com',
    islogin: false,
    lastloginday: [ 'Monday', ' Saturday' ],
    [Symbol(key1)]: 'mykey1'
  } */
 jsuser.greeting = function(){
        console.log("Hello js user");  // Hello js user
 }
 jsuser.greetingTwo = function(){

    console.log(`hello jsuser , ${this.name}`); // hello jsuser , Mousam
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

