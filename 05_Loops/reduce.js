const mynums = [1 , 2, 3]

const mytotal = mynums.reduce( function(acc , currval){
    console.log(` acc : ${acc} and currval: ${currval}`);
    /*acc : 0 and currval: 1
      acc : 1 and currval: 2
      acc : 3 and currval: 3
 */
    return acc + currval;
},0)

console.log(mytotal);// 6

const total = mynums.reduce( (acc , currval) => acc + currval , 0)
console.log(total); //6

const shoppingCart = [
    {
        itemsName : 'js course',
        price : 2999
    },
    
     {
        itemsName : 'py course',
        price : 999
    },
     {
        itemsName : 'mobile dev course',
        price : 5999
    },
     {
        itemsName : 'data science course',
        price : 12999
    }
]

const pricetoPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)

console.log(pricetoPay); //22996
