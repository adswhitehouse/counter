let numberPara = document.querySelector(".jsNumberPara");
let decreaseBtn = document.querySelector(".jsDecreaseBtn");
let resetBtn = document.querySelector(".jsResetBtn");
let increaseBtn = document.querySelector(".jsIncreaseBtn");

let counter = 0;

function counterColor() {
  if (counter > 0) {
    numberPara.style.color = "#80ef80";
  } else if (counter < 0) {
    numberPara.style.color = "#ff746c";
  } else {
    numberPara.style.color = "#000";
  }
}

increaseBtn.addEventListener("click", () => {
  counter++;
  numberPara.textContent = counter;
  counterColor();
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  numberPara.textContent = counter;
  counterColor();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  numberPara.textContent = counter;
  counterColor();
});
