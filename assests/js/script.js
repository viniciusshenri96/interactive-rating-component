"use strict";

const how = document.querySelector("[data-how-container]");
const submitbtn = document.querySelector(".btn");
const howContainer = document.querySelector(".how");
const thanksContainer = document.querySelector(".thanks");

how.addEventListener("click", function (e) {
  const circlesAll = document.querySelectorAll(".circle-number");

  if (e.target.matches("[data-circles]")) {
    circlesAll.forEach((cir) => {
      cir.style.backgroundColor = "#262E38";
      cir.style.color = "#7C8798";
    });
    e.target.style.backgroundColor = "#7C8798";
    e.target.style.color = "#FFFFFF";

    // checking if the user clicked on one of the circles
    circlesAll.forEach((cir) => {
      cir.classList.remove("active");
    });
    e.target.classList.add("active");

    circlesAll.forEach((cirCheckd) => {
      if (cirCheckd.classList.contains("active")) {
        submitbtn.style.pointerEvents = "visible";
        submitbtn.addEventListener("click", function (e) {
          e.preventDefault();
          howContainer.classList.add("show");
          thanksContainer.classList.add("show");
        });
      }
    });

    const valueNumberCircle = e.target.textContent;
    document.querySelector("[data-selected]").textContent = valueNumberCircle;
  }
});
