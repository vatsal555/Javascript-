const btn = document.querySelector("form button");
const results = document.querySelector("#results");
const range = document.querySelector("#range");

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  resultPrinter();
});

let resultPrinter = () => {
  const height = parseInt(document.querySelector("form #height").value);
  const weight = parseInt(document.querySelector("form #weight").value);
  if (height === "" || height <= 1 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight <= 1 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
    weightGuide(bmi);
  }
};

let weightGuide = (bmi) => {
  if (bmi <= 18.6) {
    range.innerHTML = `Under Weight`;
  } else if (bmi >= 24.9) {
    range.innerHTML = `Over Weight`;
  } else {
    range.innerHTML = `Normal Weight`;
  }
};
