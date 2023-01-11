"use strict";

const howCircleContainer = document.querySelector("[data-circle-container]");
const submitbtn = document.querySelector(".btn");
const howContainer = document.querySelector(".how");
const thanksContainer = document.querySelector(".thanks");
const blockBtn = document.querySelector(".blockBtn");
const circlesAll = document.querySelectorAll(".circle-number");
const arrowBack = document.querySelector(".thanks__icon-box");
const classActive = "active";
const classShow = "show";

const userEvents = ["touchstart", "click"];

userEvents.forEach((events) => {
  howCircleContainer.addEventListener(events, function (e) {
    if (e.cancelable) e.preventDefault();

    if (e.target.matches("[data-circles]")) {
      circlesAll.forEach((cir) => cir.classList.remove(classActive));
      e.target.classList.add(classActive);

      // checking if the user clicked on one of the circles
      circlesAll.forEach((cir) => cir.classList.remove(classActive));
      e.target.classList.add(classActive);

      circlesAll.forEach((cirChecked) => {
        if (cirChecked.classList.contains(classActive)) {
          // activating the submit button
          blockBtn.classList.add(classActive);
          submitbtn.addEventListener("click", function (e) {
            e.preventDefault();
            howContainer.classList.add(classShow);
            thanksContainer.classList.add(classShow);
          });
        }
      });

      // showing selected value in the thank you section
      const valueNumberCircle = e.target.textContent;
      document.querySelector("[data-selected]").textContent = valueNumberCircle;
    }
  });
});

const backFunction = function (e) {
  console.log(e);
  if (thanksContainer.classList.contains(classShow)) {
    circlesAll.forEach((cir) => cir.classList.remove(classActive));
    howContainer.classList.remove(classShow);
    thanksContainer.classList.remove(classShow);
    blockBtn.classList.remove(classActive);
  }
};

// returning to the home screen with the "ESC" key
window.addEventListener("keydown", function (e) {
  // short-circuit
  e.key === "Escape" && backFunction();
});

userEvents.forEach((events) => {
  arrowBack.addEventListener(events, backFunction);
});
