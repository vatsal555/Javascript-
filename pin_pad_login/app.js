const buttons = document.querySelectorAll(".key");
const userInput = document.querySelector(".password");
const backSpace = document.querySelector("#back-space");
const done = document.querySelector("#done");

let arr = [];

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    // console.log(btn.innerText);
    userInput.value += btn.innerText;
    // console.log(userInput.value);
    // arr = userInput.value.split("");
    arr.push(userInput.value);
    console.log(arr);
  });
}

backSpace.addEventListener("click", () => {
  arr.pop();
  userInput.value = arr.join("");
});

done.addEventListener("click", () => {
  if (userInput.value.length > 4) {
    alert("value not longer than 4");
  } //
  else {
    window.location.href = "login.html";
  }
});
