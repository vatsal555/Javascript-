// singleton
// Object.create



// object literals 

let sym1 = Symbol("key1");


let jsUser =  {
    name: "vatsal",
    "full name" : "vatsal prajapati",
    [sym1] : "mykey1",
    age: 18,
    location: "ahmedabad",
    email: "vatsal@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["monday", "saturday"]
}




// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[sym1]);



jsUser.email = "vatsal@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "vatsal@google.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello JS world");
}
jsUser.greetingTwo = function() {
    console.log(`hello js users, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());