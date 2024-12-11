
const myarr = [0,1,2,3,4,5]
const myhero = ["shaktiman" , "spiderman" ,"batman"]

const myarr2 = new Array(1,2,3,4) 
console.log(myarr[1]); // 1

myarr.push(6)
myarr.push(7)
myarr.pop()
console.log(myarr); /*[
    0, 1, 2, 3,
    4, 5, 6
  ] */

myarr.unshift(9)
console.log(myarr); /* [
    9, 0, 1, 2,
    3, 4, 5, 6
  ]  adding the elemt in first place*/ 

myarr.shift()
console.log(myarr); /* [
    0, 1, 2, 3,
    4, 5, 6
  ] */

console.log(myarr.includes(10)); // false output because 10 does not present in arr
console.log(myarr) /* [
    0, 1, 2, 3,
    4, 5, 6
  ] */

const newarr =  myarr.join() // change the type of arr 
console.log(myarr); /*[
    0, 1, 2, 3,
    4, 5, 6
  ] */
console.log(typeof newarr); //string

//slice splice

console.log("A" , myarr); /*A [
    0, 1, 2, 3,
    4, 5, 6
  ] */

const myn1 = myarr.slice(1,3)
console.log(myn1); // [ 1, 2 ]
console.log("B" , myarr); /* B [
    0, 1, 2, 3,
    4, 5, 6
  ] */

const myn2 = myarr.splice(1,3) // it also change the original arry elemnt input
console.log("C" , myarr); //  C [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]






