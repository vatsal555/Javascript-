const height = parseInt(document.querySelector("form #height"));
const weight = parseInt(document.querySelector("form #weight"));
const result = document.querySelector("form #results");
const btn = document.querySelector("form button");

if (height === "" || height <= 0 || isNaN(height)) {
  result.innerHTML = `please give a valid height ${height}`;
} else if (weight === "" || weight <= 0 || isNaN(weight)) {
  result.innerHTML = `please give a valid weight ${weight}`;
} else {
  const bmi = (weight / ((height * weight) / 10000)).toFixed(2);
  result.innerText = `bmgi = ${bmi}`;
}
