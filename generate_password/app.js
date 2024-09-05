const userInput = document.querySelector(".password");
const button = document.querySelector(".btn");
const copy = document.querySelector(".display i");

button.addEventListener("click", () => {
  const length = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = `!@#$%^&*()_+-=}{[]|/:;"'<>,.?/~`;

  const _randomPassGen = upperCase + lowerCase + number + symbol;

  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  for (let i = password.length; i < length; i++) {
    password +=
      _randomPassGen[Math.floor(Math.random() * _randomPassGen.length)];
  }

  console.log(password);

  userInput.value = password;
});

copy.addEventListener("click", () => {
  userInput.select();
  document.execCommand("copy");
});
