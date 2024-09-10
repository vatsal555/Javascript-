const submit = document.querySelector(".submit");
const ok = document.querySelector(".ok");
const popup = document.querySelector("#popup");

submit.addEventListener("click", () => {
  popup.classList.add("openPopup");
});

ok.addEventListener("click", () => {
  popup.classList.remove("openPopup");
});
