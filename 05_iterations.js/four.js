const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "c++", "rb", "py", "java"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}


const map = new Map() 
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('Fr', "France")

for (const key in map) {
   console.log(key);  // because it is not iterable
}