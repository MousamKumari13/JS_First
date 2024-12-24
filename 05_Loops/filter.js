const mynum = [ 1 , 2 , 3, 4, 5, 6, 7 , 8, 9, 10]

const newnum = mynum.filter( (num) => {
    return num > 4;
})
console.log(newnum); // [ 5, 6, 7, 8, 9, 10 ]

const newNums =[]

mynum.forEach( (num) => {
    if(num < 5){
        newNums.push(num)
    }
})
console.log(newNums); // [ 1, 2, 3, 4 ]

const book = [
    {
        title : 'Book One' , genre : 'Fiction' , publish : 1981, edition: 2004 },
      {
        title : 'Book two' , genre : 'History' , publish : 1982, edition: 2005 },
      {
        title : 'Book three' , genre : ' non-Fiction' , publish : 1983, edition: 2005 },
      {
        title : 'Book four' , genre : 'History' , publish : 1985, edition: 2006 },
]

const userbook = book.filter( (bk) => bk.genre === 'History')

console.log(userbook);/*
   [
  { title: 'Book two', genre: 'History', publish: 1982, edition: 2005 },
  {
    title: 'Book four',
    genre: 'History',
    publish: 1985,
    edition: 2006
  }
]
*/
const userbk = book.filter( (bk) => {return bk.publish >= 1983})

console.log(userbk);
/*[
  {
    title: 'Book three',
    genre: ' non-Fiction',
    publish: 1983,
    edition: 2005
  },
  {
    title: 'Book four',
    genre: 'History',
    publish: 1985,
    edition: 2006
  }
]
*/