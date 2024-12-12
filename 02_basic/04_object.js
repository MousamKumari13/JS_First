// How to decleare object with the help of constructor ...make  singleton 

//const tinderuser = new Object() // o/p - {} .. it is a singleton object
const tinderusers = {} // o/p - {} .same output ... it is a non-singleton object

tinderusers.id = "123abc"
tinderusers.name = "Sam"
tinderusers.islogin = false

console.log(tinderusers); // { id: '123abc', name: 'Sam', islogin: false }

const regularuser = {
    email : "mousam@123",
    fullname :{
        username : {
            firstname : "Mousam",
            lastname : "Sharma"
        }
    }
}
console.log(regularuser.fullname.username.firstname); // Mousam

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
//const obj3 = Object.assign({} , obj1 , obj2) //  o/p- {1 : "a" , 2 : "b" ,3 : "c" , 4 : "d" }
const obj3 = {...obj1 , ...obj2}
console.log(obj3); // {1 : "a" , 2 : "b" ,3 : "c" , 4 : "d" }

const user = [
    {
    },
    {
    },
    {
    },
]

user[1].email
console.log(tinderusers); // { id: '123abc', name: 'Sam', islogin: false }

console.log(Object.keys(tinderusers)); // [ 'id', 'name', 'islogin' ]
console.log(Object.values(tinderusers)); // [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderusers)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'islogin', false ] ]

console.log(tinderusers.hasOwnProperty("islogin")); // true

const course = {
    coursename : "Javascript",
    price : "999",
    courseInstructor : "Mousam"
}
 //course.courseInstructor

 const{courseInstructor : Inst} = course
 console.log(Inst); // Mousam

 [
    {},
    {},
    {}
 ]
 



