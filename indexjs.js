(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let value = event.target.dataset.num;
      if (value == "+") {
      }

      console.log(currentOperator + value);
      screen.value += value;

      console.log("screen==" + JSON.stringify(screen));
      console.log("screen---" + screen.value);
    });
  });

  equal.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    console.log("button text is", buttonText);
    console.log(screen.value);
    if (screen.value === "") {
      screen.value = "";
    } else {
      if (currentOperator === "+") {
        screen += value;
      } else if (currentOperator === "-") {
        screen -= value;
      } else if (currentOperator === "*") {
        screen *= value;
      } else if (currentOperator === "/") {
        screen /= value;
      }
      console.log("currentOperator==" + currentOperator);
      console.log("screen==" + screen);
      console.log("value==" + value);
    }
  });

  clear.addEventListener("click", function () {
    screen.value = " ";
  });
})();
