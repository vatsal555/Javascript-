let marvel_heros = ["Thor", "Ironman", "Spiderman"]
let dc_heros = ["Superman", "Batman", "flash"]
// console.log(marvel_heros);
// console.log(dc_heros);
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


let all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // this is a spread operator using another option for concat operator


let another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("vatsal"));
// console.log(Array.from("vatsal"));
// console.log(Array.from({name: "vatsal"})); //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));