// for of loop


let arr = [1,2,3,4,5,6,7,8,9,10]

for (const num of arr) {
    // console.log(num);
}

let greeting = "Hello World!"

for (const greet of greeting) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
}

const map = new Map() 
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('Fr', "France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, "-:", value);
}


const myObj = {
    game1 : "wwe2k24",
    game2 : "bgmi",
    game3 : "asphalt 9"
}


// for (const [key,value] of myObj) {
//     console.log(key, "-:", value);
// }