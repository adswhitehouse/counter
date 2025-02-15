let numberPara = document.querySelector(".jsNumberPara");

let counter = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("jsDecreaseBtn")) {
      counter--;
      numberPara.textContent = counter;
      counterColor();
    } else if (button.classList.contains("jsIncreaseBtn")) {
      counter++;
      numberPara.textContent = counter;
      counterColor();
    } else {
      counter = 0;
      numberPara.textContent = counter;
      counterColor();
    }
  });
});

function counterColor() {
  if (counter > 0) {
    numberPara.style.color = "#80ef80";
  } else if (counter < 0) {
    numberPara.style.color = "#ff746c";
  } else {
    numberPara.style.color = "#000";
  }
}
