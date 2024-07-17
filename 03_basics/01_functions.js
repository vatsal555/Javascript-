function checking() {
    console.log("v");
    console.log("a");
    console.log("t");
    console.log("s");
    console.log("a");
    console.log("l");
}
// checking()


// function addTwoNumber(number1 , number2) {

//         console.log(number1 + number2);

// }
function addTwoNumber(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2

}

// addTwoNumber(5 , 5)
let result = addTwoNumber(5 , 5)
// console.log("result :", result);

function loginUserMessage(username = "vatsal") {
    // if (username === undefined) {
    if (!username) { //profesional way 
        // console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


function calculatorCartPrice(val1, val2,...num1) { // ... is called rest or spread operator in function
    return num1
}
// console.log(calculatorCartPrice(2000,250,30,550,45,250))


let user = {
    username: "vatsal",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     username: "sonu",
//     price: 299
// })


let myArray = [200,400,500,600,700]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,600,700]));