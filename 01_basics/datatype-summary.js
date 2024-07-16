// primitive datatypes
// 7 types: string, number, boolean, null, undefined, bigInt, symbol
    const id = Symbol(1234);
    const anotherId = Symbol(1234);
    // console.log(id === anotherId);
    const bigNumber = 12355689975464846846846468468468464646464684615n;
    // console.log(bigNumber)
    // console.log(typeof bigNumber);
// Reference (non primitive)
// types: array, object, function
const wwe = ["roman", "brock", "undertaker", "kane", "triple h"];
let myObj = {
    name : "vatsal prajapati",
    email : "vatsal@google.com",
    
}
const myFunction = function() {
    console.log("hello world");
}
console.log(wwe);
console.log(myObj);
console.log(myFunction);
console.log(typeof wwe);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof myFunction);
console.log(typeof id);