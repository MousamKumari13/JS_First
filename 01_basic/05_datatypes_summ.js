//primitive data types
// 7 types = String , Number , Boolean , null , undefined , Symbol ,BigInt

const score = 100 // number
const scorevalue = 100.3 //number
const isloogin = false

const outsidetemp =  null
let usremail; // undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); // output = false

const bigNumber = 1735465794645362826274n // BigInt

console.log(typeof bign); // output = undefined .. the data types of undefined is undefined
console.log(typeof outsidetemp); // output = object  ,,,the datatypes of null is object 

//Refrence (non primitive data types)
//Array , Object , Function // sare ka datatypes function hota h 

const hero = ["saktiman" , "nagraj" ,"doga"]; // Array
let myobj = {  // object
    name: "Mousam",
    age: 22,
}

const myfun = function(){ // Function
    console.log("Hello world");
    
}
console.log(typeof myfun); // datatypes = object function

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) - as copy ,, Heap(non- primitive) - as Reference

let myyoutubename = "mousamkumari@123"

let anothename = myyoutubename
anothename = "sonusharma@097"

console.log(myyoutubename); // output - mousamkumari@123
console.log(anothename); // output - sonusharma@097

let userone = {
     email : "memousam@.com",
     upi: "pym23"

}

let usertwo = userone
usertwo.email = "sonu@.com"

console.log(userone.email);//sonu@.com
console.log(usertwo.email);// sonu@.com
