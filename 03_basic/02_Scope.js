let a = 300
if (true) {
    let a = 30
    console.log(a);//30
}
console.log(a);//300

function one(){
    const username = "Mousam"
    function two(){
        const website = "Youtube"
        console.log(username); // Mousam  Youtube
    }
    //console.log(website); it give error because parent cant be acess child variable
    
    two()
}
//one()

if(true){
    const username = "Mousam"
    if(username === "Mousam"){
        const website = "  Youtube"
        console.log(username + website);
    }
}

console.log((addone(5))); // 6

function addone(num){
    return 1 + num
}

// console.log(addtwo(5));  // error
const addtwo = function(num){
    return 2 + num
}