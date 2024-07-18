// immedately invoked function expression (IIFE)


(function chai () {
    // it is called named iife
    console.log("db connected");
}) ();


(() => {
    // it is called simple iife
    console.log("db connected two");
}) ();

((name) => {
    console.log(`db connected two ${name}`);
}) ("vatsal")

// chai()