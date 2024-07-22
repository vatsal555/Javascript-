# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-efpmfp?file=index.html)

# Solution code

## project 1

```javascript
    const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    // switch (e.target.id === 'grey') {
    //   case 1:
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //   default:
    //     break;
    // }

    if(e.target.id === "grey") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id
    }
  });
});
```

## project 2
```javascript
    const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span> ${bmi} </span>`;
  }
});

```
## project 3
```javascript
    const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
