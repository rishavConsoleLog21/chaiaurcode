// Write code to creater a promise that will resolve when a user clicks a button on the page.

// const promiseButton = new Promise(function (resolve, reject) {
//   document.querySelector(".btn1").addEventListener("click", function () {
//     resolve("Resolved: Button clicked");
//   });
//   document.querySelector(".btn2").addEventListener("click", function () {
//     reject("Something went wrong");
//   });
// });

// promiseButton
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

// async function consumePromiseButton(){
//     try {
//         const response = await promiseButton
//         console.log(response, "Rishav");
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseButton()

const randomNum = Math.floor(Math.random() * 5)

console.log(randomNum);