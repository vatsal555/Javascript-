const button = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const backSpace = document.querySelector(".back-space");
const tab = document.querySelector(".tab");
const capsLock = document.querySelector(".caps");
const enter = document.querySelector(".enter");
const shift = document.querySelector(".shift");
const spaceBar = document.querySelector(".space-bar");

let arr = [];

let arr2 = [];

for (const btn of button) {
  //   console.log(btn);
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    arr = textarea.value.split("");
    console.log(arr);
  });
}

backSpace.addEventListener("click", () => {
  arr.pop();
  textarea.value = arr.join("");
});

tab.addEventListener("click", () => {
  let length = arr.length;
  arr.splice(length - 1, 0, " ");
  // console.log(length);
  // arr.splice()
  textarea.value = arr.join("");
});

capsLock.addEventListener("click", () => {
  for (const btn of button) {
    btn.classList.toggle("upper");
  }
});

enter.addEventListener("click", () => {
  arr.push("");
  textarea.value = arr.join("");
});

shift.addEventListener("click", () => {});

spaceBar.addEventListener("click", () => {
  arr.push(" ");
  textarea.value = arr.join("");
});
