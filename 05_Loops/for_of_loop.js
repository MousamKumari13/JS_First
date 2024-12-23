/////For of loop//////////////////
const arr = [1 , 2,3 ,4 , 5]
for(const num of arr){
    console.log(num);
}

const greeting = "hello world"
for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}

//Maps
const map  = new Map()
map.set('IN' , "India")
map.set('USA' , "United state of America")
map.set('FR' , "France")
map.set('IN' , "India")

console.log(map);

for(const [key , value] of map){
  console.log(key ,':-', value);
}

const myobj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}