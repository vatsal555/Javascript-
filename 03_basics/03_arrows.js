let user = {
    username: "vatsal",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);    
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sonu"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "vatsal"
//     console.log(this.username);
// }

// chai()

// let chai = function () {
//     let username="vatsal"
//     console.log(this.username);
// }

let chai = () => {   // => it is called an arrow function
    let username="vatsal"
    console.log(this.username);
}


// chai()

// let addTwo = (num1 , num2) => {
// return num1 + num2
// }


// let addTwo = (num1 , num2) => (num1 + num2)


let addTwo = (num1 , num2) => ({username: "vatsal"})

console.log(addTwo(5,10))