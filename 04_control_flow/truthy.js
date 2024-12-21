const username = []

if(username){
    console.log("Got username");
    
}else{
    console.log("Dont have a user name");
    
}

//Falsy value --> false , 0 , -0 ,BigInt 0n ,"" ,null ,undefined , NaN

//Truthy Value --> "0" , 'false' ," " , [] , {} , function(){}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log(" object is empty");
    
}

// Nullish Coalescing Operator {??} : null undefined

let val1 
val1 = 5 ?? 10
console.log(val1); // 5

let val2 
val2 = null ?? 10
console.log(val2);  // 10

let val3 
val3 = undefined ?? 15
console.log(val3); //15

let val4 
val4 = null ?? 19 ?? 45
console.log(val4); // 19

// Ternary OPerator

// Condition ? true : false

const price = 100
price >= 80 ? console.log("Price is greater than 80") : console.log("Price is less than 80"); //Price is greater than 80

