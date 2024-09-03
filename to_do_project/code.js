const userInput = document.querySelector("#task");
const button = document.querySelector(".todo button");

let arr = [];

const checkUser = (inputValue) => {
  if (inputValue === "") {
    alert("You must write something");
  } else {
    arr.push(inputValue);
    // console.log(arr);
    let li = document.createElement("li");
    li.innerText = inputValue;
    // console.log(li);
    // document.querySelector(".list-container").append(li);
    document.querySelector(".list-container").appendChild(li);
    userInput.value = "";

    li.addEventListener("click", () => {
      document.querySelector(".list-container").removeChild(li);
      //   document.querySelector(".list-container").remove("li");
      //   document.querySelector(".list-container").classList.remove("li");
    });
  }
};

button.addEventListener("click", (evt) => {
  evt.preventDefault();
  //   console.log(userInput.value);
  checkUser(userInput.value);
});
