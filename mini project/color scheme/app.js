const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

// button.forEach((button) => {
//   console.log(button);
//   button.addEventListener("click", (e) => {
//     console.log(e);
// console.log(e.target);
//     console.log(e.type);
// if (e.target.id === "grey") {
//   body.style.backgroundColor = e.target.id;
// }
//     if (e.target.id === "white") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

button.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("id");
    // console.log(id);
    if (id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (id === "white") {
      body.style.backgroundColor = "white";
    }
    if (id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (id === "yellow") {
      body.style.backgroundColor = "yellow";
    }

    // switch (id) { //doubt
    //   case id === "grey":
    //     body.style.backgroundColor = "grey";
    //     break;
    //   case id === "white":
    //     body.style.backgroundColor = "white";
    //     break;
    //   case id === "blue":
    //     body.style.backgroundColor = "blue";
    //     break;
    //   case id === "yellow":
    //     body.style.backgroundColor = "yellow";
    //     break;

    //   default:
    //     break;
    // }
  });
});
