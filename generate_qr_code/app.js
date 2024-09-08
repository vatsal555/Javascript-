const button = document.querySelector("button");
const userInput = document.querySelector("#text");
const imgBox = document.querySelector("#imgBox");
const qrImage = document.querySelector("#qrImage");

button.addEventListener("click", () => {
  if (userInput.value === "") {
    userInput.classList.add("error");
    setTimeout(() => {
      userInput.classList.remove("error");
    }, 1000);
  } else {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      userInput.value;
    imgBox.classList.add("show-img");
  }
});
