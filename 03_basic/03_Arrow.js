const user ={
    username : "Mousam",
    price : 399 ,
    WelcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`); // Mousam , Welcome to website
        console.log(this);/*
        {
           username: 'Mousam',
           price: 399,
           WelcomeMessage: [Function: WelcomeMessage]
          } 
        sam , Welcome to website
            {
               username: 'sam',
                price: 399,
                WelcomeMessage: [Function: WelcomeMessage]
            }
          */
    }

}

//user.WelcomeMessage()
//user.username= "sam"
//user.WelcomeMessage()

console.log(this); //{}

function codu(){
    let username = "Mousam"
    console.log(this.username); //undefined
    
}
codu() // undefined

const codim = function(){
    let username = "Mousam"
    console.log(this.username); //undefined
    
}

const chai = () =>{
    let username = "Mousam"
    console.log(this.username); // undefined
    
}

const add = (num1 , num2) => {
    return num1 + num2
}
console.log(add(3 , 4)); //4 

const addnum= (num1 , num2) =>  (num1 + num2) // => arroe keyword 
const name = (num1 , num2) => ({username : "Mousam"})
console.log(addnum(4,3)); //7

