
function saymyname(){
    console.log("M");
    console.log("o");
    console.log("u");
    console.log("s");
    console.log("a");
    console.log("m");
}

saymyname()

function addtwonum (number1 ,number2 ){
    console.log(number1 + number2); // 8
    
}

const res =  addtwonum(3 , 5)
console.log("Result : ",res); // o/p - Result :  undefined

function addnum (num1 ,num2 ){
     // let result = num1 + num2
     // return result;
    return num1 + num2 
}
const result =  addnum(3 , 3)
console.log("Result : ",result); // Result :  6

function loginusermsg(username){
    if(!username){
        console.log("Enter user name"); // Enter user name
        return
    }
    return `${username} just login`
}

//console.log(loginusermsg("Mousam"));
console.log(loginusermsg()); // undefined

