// theme changes using js
let currentTheme = 1;
let slider = document.querySelector(".slider");
let sliderBox = document.querySelector(".slider-box");
let mainContainer = document.querySelector(".mainContainer");

slider.addEventListener("click", () => {
  if (currentTheme < 3) {
    currentTheme++;
    switch (currentTheme) {
      case (currentTheme = 2):
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        mainContainer.classList.add("t2");
        slider.style.left = "35%";
        break;
      case (currentTheme = 3):
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
        mainContainer.classList.add("t3");
        slider.style.left = "73%";
        break;
    }
  } else {
    currentTheme = 1;
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    mainContainer.classList.remove("t3", "t2");
    slider.style.left = "0%";
  }
});

// getting inputs from users
let numKey = document.querySelectorAll(".num");
let digit = document.querySelector(".digit");
digit.innerHTML = 0;
let firstSetNo = "";
let secondSetNo = "";

let setOperandOne = "";
let setOperator = "";
let setOperandTwo = "";

numKey.forEach((key) => {
  key.addEventListener("click", function () {
    if (setOperator === "") {
      let btn = this.innerHTML;
      firstSetNo += btn;
      digit.innerHTML = firstSetNo;
    } else {
      let btn = this.innerHTML;
      secondSetNo += btn;
      digit.innerHTML = secondSetNo;
    }
  });
});
// getting operators
let operators = document.querySelectorAll(".operator");
operators.forEach(function (op) {
  op.addEventListener("click", function () {
    let clickedOperator = this.innerHTML;
    if (setOperandOne === "") {
      setOperandOne = firstSetNo;
      setOperator = clickedOperator;
      digit.innerHTML = clickedOperator;
    } else {
      setOperator = clickedOperator;
      digit.innerHTML = clickedOperator;
    }
  });
});
// equal function
function equalTo() {
  setOperandTwo = secondSetNo;
  let total = 0;
  if (setOperandOne.length === 0 && setOperandTwo > 0) {
    total = setOperandTwo;
  } else if (setOperandTwo.length > 0) {
    switch (setOperator) {
      case "+":
        totalVal = parseInt(setOperandOne) + parseInt(setOperandTwo);
        break;
      case "-":
        totalVal = parseInt(setOperandOne) - parseInt(setOperandTwo);
        break;
      case "x":
        totalVal = parseInt(setOperandOne) * parseInt(setOperandTwo);
        break;
      case "/":
        totalVal = parseInt(setOperandOne) / parseInt(setOperandTwo);
        break;
    }
    total = totalVal.toString();
  } else if (setOperandOne.length > 0) {
    total = setOperandOne;
  } else if (firstSetNo.length > 0 && firstSetNo != 0) {
    total = firstSetNo;
  } else {
    total = 0;
  }

  firstSetNo = total;
  digit.innerHTML = total;
  secondSetNo = [];
  setOperandOne = "";
  setOperator = "";
  setOperandTwo = "";
}
// del function
function del() {
  if (digit.innerHTML.length === 1) {
    let curVal = 0;
    rearrange(curVal);
  } else {
    let curVal = parseInt(digit.innerHTML.slice(0, -1));
    rearrange(curVal);
  }
}
// after delete rearrange the format
function rearrange(curVal) {
  if (setOperator === "") {
    if (curVal === 0) {
      firstSetNo = " ";
      digit.innerHTML = 0;
    } else {
      firstSetNo = curVal;
      digit.innerHTML = firstSetNo;
    }
  } else {
    if (curVal === 0) {
      secondSetNo = " ";
      digit.innerHTML = 0;
    } else {
      secondSetNo = curVal;
      digit.innerHTML = secondSetNo;
    }
  }
}

function reset() {
  digit.innerHTML = 0;
  firstSetNo = "";
  secondSetNo = "";

  setOperandOne = "";
  setOperator = "";
  setOperandTwo = "";
}
