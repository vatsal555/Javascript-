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

