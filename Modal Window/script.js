"use strict";
//*********Manupulation of class**********
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //whe we select multiple elements through one query selector it will only select first one. so for selecting all we have to use queryselector all.

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
//will close modal on click anywhere on scree i.e on overlay
overlay.addEventListener("click", closeModal);

// how to respond keyboard events
// in order to respond keyboard events we have to use keypress event under addeventlistener
// keyboard events are global events so we usually list on the whole document.

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//how do we know if the modal is currently invisible?
//if the modal contains the class hidden it means it's not visible.
