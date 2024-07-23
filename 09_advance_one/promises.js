// const promiseOne = new Promise(function (resolve,reject) {
//     // do an async task
//     // dbcalls, cryptography, network
//     setTimeout(function() {
//         console.log("async task is completed");
//         resolve()
//     },1000)
// })

// promiseOne.then(function() {
//     console.log("promise consumed");
// })


// new Promise(function (resolve,reject) {
//     setTimeout(function() {
//         console.log("async task 2 ");
//         resolve()
//     },1000)
// }).then(function() {
//     console.log("async task resolved");
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "javascript", email : "javascript@google.com"})
//     },1000)
// })
// promiseThree.then((user) => {
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true
//          error = false
//         if (!error) {
//             resolve({username : "vatsal", password : "123"})
//         } else {
//             console.log("Error: Something went wrong");
//         }
//     },1000)
// })


// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => console.log("The promises is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve,reject) {
//     setTimeout(() => {
//                 let error = true
//                 if (!error) {
//                     resolve({username : "javascript", password : "123"})
//                 } else {
//                     console.log("Error: Something went wrong");
//                 }
//             },1000)
// })

// async function consumePromiseFive () {
//     // const response = await promiseFive
//     // console.log(response);
    
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// }
// consumePromiseFive()

// async function getAllUsers () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("Error: ",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))