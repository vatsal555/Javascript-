let myDate = new Date() 
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023,6,17) 
// let myCreatedDate = new Date(2023,6,17,5,3) 
// let myCreatedDate = new Date("2024-07-17") 
let myCreatedDate = new Date("01-21-2005") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday: "long"
})