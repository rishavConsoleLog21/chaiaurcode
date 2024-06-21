// Generating Random Color

const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Selecting Elements
let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1500);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
    intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
