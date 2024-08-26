// const product = {
//     title : "Ball Pen",
//     rating : 4,
//     offer : 5,
//     price : 270
// }

// console.log(product);


// const profile = {
//     userName : "vatsal_.prajapati",
//     password : 123456789,
//     name : "vatsal prajapati",
//     post : 195,
//     followers : 569 + "k",
//     following : 4,
//     isFollowed : true,
//     bio : "Enterprenuer",
//     isLoggedIn : true
// }

// console.log("Instagram profile of " + profile.name + " . He username are " + profile.userName + " He's followers are " + profile.followers + " He's following are " + profile.following + " He's logged in " + profile.isLoggedIn + " . People followed him " + profile.isFollowed + " He's post is " + profile.post + " He's name is " + profile.name + " He's bio is " + profile.bio);


// let num = prompt("Enter a number")
// if (num % 5 == 0) {
//     console.log(`${num} is multiple of 5`);

// }


// let score = 86

// if (score >= 90 && score <= 100) {
//     console.log("Grade : A");

// } else if (score >= 70 && score <= 89) {
//     console.log("Grade : B");

// } 
// else if (score >= 60 && score <= 69) {
//     console.log("Grade : C");
// }
// else if (score >= 50 && score <= 59) {
//     console.log("Grade : D");
// }
// else if (score >= 0 && score <= 49) {
//     console.log("Grade : F");
// } else {
//     console.log("Invalid input");

// }


// let score = 55
// switch (true) {
//     case (score >= 90 && score <= 100):
//         console.log("Grade : A");
//         break;
//     case (score >= 70 && score <= 89):
//         console.log("Grade : B");
//         break;
//     case (score >= 60 && score <= 69):
//         console.log("Grade : C");
//         break;
//     case (score >= 50 && score <= 59):
//         console.log("Grade : D");
//         break;
//     case (score >= 0 && score <= 49):
//         console.log("Grade : F");
//         break;
//     default:
//         console.log("Invalid input");
//         break;
// }

// let str = "javascript"
// let size = 0
// for (const i of str) {
//     console.log("i = " + i);
//     size++
// }
// console.log( "size = " + size);

// const person = {
//     name : "vatsal",
//     lname : "prajapati",
//     age : 20,
//     nationality : "INDIAN",
//     isLoggedIn : true,
//     username : "vatsalprajapati",
//     password : 1234567890
// }

// for (const key in Object.values(person)) {
//     console.log(key);
    
// }


// let num = 100

// for (let i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//         console.log("even number are " + i);
//     } 
// }

// let gameNum = 25 
// let users = prompt("Enter the number")

// while (users != gameNum) {
//     users = prompt("you entered a wrong number. guess again!");
    
// }
// console.log("congratulation you won the game");


// let fullName = prompt("Enter the fullname wihtout spaces")

// let username = "@" + fullName + fullName.length
// console.log(username);

// let marks = [85,97,44,37,76,60]

// let sum = 0

// for (const i of marks) {
//     sum += i    
// }

// let avg = sum / marks.length

// console.log("avg marks of the class " + avg);


// let items = [250,645,300,900,50] 
// let i = 0

// for (const val of items) {
    //     // console.log(`value of index ${i} = ${val}`);
    //     let offer = val / 10
    //     items[i] -= offer
    //     console.log(`value after offer ${items[i]}`);
    
    //     i++
    // } 
    
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10
//     items[i] -= offer
// }
// console.log(`offer after discount ${items}`);


// let arr = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"]

// console.log(arr);

// arr.shift()
// // arr[2] = "Ola"
// arr.splice(2,1, "Ola")
// arr.push("amazon")

// console.log(arr);

// function hello (str) {
//     let count = 0
//     for (const val of str) {
//         if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u" ) {
//             count ++ 
//         }
//     }
//     console.log(count);
     
// }

// hello("apnacollege")

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.forEach(function square(arr) {
//     console.log(arr * arr);
// })


// let marks = [87,93,64,99,86]
// let score = marks.filter((val) => {
//     return val > 90
// })
// console.log(score);


// let n = prompt("Enter the number")

// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i
// }

// let totalValue = arr.reduce((acc, curVal) => {
//     return acc + curVal
// })


// let totalValue = arr.reduce((acc, curVal) => {
//     return acc * curVal
// })

// console.log(totalValue);


// let desktop = document.querySelector('h2')
// console.dir(desktop.innerText)
// desktop.innerText = desktop.innerText + " from vatsal prajapati"

// let divs = document.querySelectorAll('.box')
// console.log(divs);


// let idx = 1
// for (const div of divs) {
//     div.innerText = `new unique value ${idx}`
//     idx++   
// }

// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 1"
// divs[2].innerText = "new unique value 1"

// let divs = document.querySelector('div')
// let p = document.querySelector('p')
// let h2 = document.querySelector('h2')

// let id = divs.getAttribute('id')
// console.log(id);

// let para = p.getAttribute('class')
// console.log(para);

// let hlo = h2.getAttribute('id')
// console.log(hlo);

// let para = document.querySelector('p')
// console.log(para.setAttribute('class', 'newClass'));

// let btn = document.createElement('button')
// btn.innerText = "click me"

// let para = document.querySelector('p')
// para.after(btn)
// console.log(para);

// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i> This is a vatsal prajapati create of this web page </i>"

// document.querySelector('body').prepend(newHeading)

// let tag = document.querySelector('div')
// tag.remove()

// let btn = document.createElement('button')
// btn.innerText = "Dare to check me!"
// btn.style.backgroundColor = "aqua"
// btn.style.color = "white"

// document.querySelector('body').prepend(btn)

// document.querySelector('button').addEventListener('click', Click)

// function Click() {
//     document.querySelector('body').style.backgroundColor = "yellow"
// }

// let para = document.quer ySelector('p')
// para.getAttribute('class')
// para.setAttribute('class', 'newClass')
// para.classList.add('newClass')
// para.classList.remove('content')
// console.log(para);

// let btn = document.querySelector('button')
// btn.onclick = () => {
//     document.querySelector('body').style.backgroundColor = "red"
// }

// let currmode = "light"
// let btn = document.querySelector('button').addEventListener('click', function Click() {
//     if (currmode === "light") {
//         currmode = "dark"
//         document.querySelector('body').style.backgroundColor = "black"
//     } else {
//         currmode = "light"
//         document.querySelector('body').style.backgroundColor = "white"
//     }
//     console.log(currmode);
    
// })

// const employee = {
//     calcTax() {
//         console.log("tax rate is 1o%");
//     },
// }

// const person = {
//     salary : 50000
// }

// person.__proto__ = employee

// let data = "secret information"
// class users {
//     constructor(name , email) {
//         this.name = name
//         this.email = email
//     }
//     viewData () {
//         console.log("Data =", data);
        
//     }
// }

// class admin extends users{
//     constructor (name, email) {
//         super(name, email)
//     }
//     editData () {
//         data = "Add some new information"
//     }
// }

// let student1 = new users("vatsal", "vatsal@google.com")

// let admin1 = new admin("sonu", "sonu@google.com")











