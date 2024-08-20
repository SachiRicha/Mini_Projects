"use strict";

const buttons = document.getElementsByTagName("input");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    const btnValue = event.target.value;
    // console.log(btnValue);
    if (btnValue === "=") {
      eval(display.value);
    }
  });
}
