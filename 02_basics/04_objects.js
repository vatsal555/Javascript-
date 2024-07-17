// let tinderUser = new Object() // singelton declaration

let tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sonu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


let regularUser = {
    email : "vatsal@google.com",
    fullname : {
        userfullname : {
            firstname : "vatsal",
            lastname : "prajapati"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}

// let obj3 = {obj1, obj2}

// let obj3 = Object.assign({},obj1,obj2)
let obj3 = {...obj1,...obj2}  // (...) spread operator 
// console.log(obj3);


let users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    },
    {
        id: 3,
        email: "v@gmail.com"
    },
]

// users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


let course = {
    coursename: "js in hindi",
    price : "999",
    courseinstructor : "vatsal prajapati"
}

// course.courseinstructor

let {courseinstructor : instructor} = course
let {coursename} = course
let {price : rs} = course

console.log(rs);  