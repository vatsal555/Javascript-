const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc value ${acc}, currval value ${currval}`);
//     return acc + currval
// }, 0 ) 

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc value : ${acc}, currval value : ${currval}`);
//     return acc + currval
// },5 )

const myTotal = myNums.reduce( (acc, currval) => acc + currval ,5);

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2500
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "java course",
        price: 1500
    }
]


const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay);