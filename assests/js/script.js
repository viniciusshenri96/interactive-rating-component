"use strict";

const howCircleContainer = document.querySelector("[data-circle-container]");
const howContainer = document.querySelector("[data-how-container]");
const thanksContainer = document.querySelector("[data-thanks-container]");
const submitbtn = document.querySelector("[data-btn-submit]");
const blockBtn = document.querySelector("[data-block-btn]");
const circlesAll = document.querySelectorAll("[data-circles]");
const arrowBack = document.querySelector("[data-arrow-back]");

const classActive = "active";

const userEvents = ["touchstart", "click"];

userEvents.forEach((events) => {
  howCircleContainer.addEventListener(events, function (e) {
    // avoid bug in touchstart event
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
            howContainer.classList.add(classActive);
            thanksContainer.classList.add(classActive);
          });
        }
      });

      // showing selected value in the thank you section
      const valueNumberCircle = e.target.textContent;
      document.querySelector("[data-selected]").textContent = valueNumberCircle;
    }
  });
});

const backFunction = function () {
  if (thanksContainer.classList.contains(classActive)) {
    [howContainer, thanksContainer, blockBtn].forEach((el) =>
      el.classList.remove(classActive)
    );
    circlesAll.forEach((cir) => cir.classList.remove(classActive));
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
