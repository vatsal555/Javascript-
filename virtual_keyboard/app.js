const button = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const backSpace = document.querySelector(".backspace");
const shift = document.querySelector(".shift");
const spaceBar = document.querySelector(".spacebar");

// button.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn.innerText);
//   });
// });

for (const btn of button) {
  btn.addEventListener("click", () => {
    console.log(btn.innerText);
    textarea.value += btn.innerText;
  });
}
