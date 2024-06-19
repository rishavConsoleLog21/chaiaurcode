const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const guide = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    if (bmi < 18.5) {
      guide.innerHTML += `You are Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      guide.innerHTML += `You are Normal`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      guide.innerHTML += `You are Overweight`;
    } else {
      guide.innerHTML += `You are Obese`;
    }
  }
});
