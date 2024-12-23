//***************** for in loop *******************

const myobject ={
    js : 'javascript',
    cpp : 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myobject){
    console.log(`${key} is shortcut of ${myobject[key]}`);
}

const program = ["js", "rb","cpp" ,"py", "java"]
for(const key in program){
    console.log(key); /*
       1
       2
       3
       4
*/
}
for(const key in program){
    console.log(program[key]); /*
    js
rb
cpp
py
java
*/
}
const map  = new Map()
map.set('IN' , "India")
map.set('USA' , "United state of America")
map.set('FR' , "France")
map.set('IN' , "India")

for(const key in program){
    console.log(program[key]);// no output
}