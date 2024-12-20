const temprature = 41

if(temprature == 40){
    console.log("Temperature is less than 50");
    
}else{
    console.log("temperature is greater than 50"); // temperature is greater than 50
    
}
console.log("Execute");

const score = 200
if(score > 100){
    var power = "fly" // we cant use var because it also  acess by outside the scope 
    console.log(`user power : ${power}`);
    
}
console.log(`user power : ${power}`);