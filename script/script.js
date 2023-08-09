"use strict";

//Selecting elements
const about = document.querySelector(".mt-40");
const emailForm = document.querySelector("#emailForm");
const emailInput = document.querySelector("#email");
const jobInfo = document.querySelectorAll(".show");
const hover = document.querySelectorAll(".job-info-box");
const showMore = document.querySelectorAll(".show-more");

//Checking Email's Format
function isValidEmail(email) {
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
}

// Show info when submit
emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailIn = emailInput.value;
  if (isValidEmail(emailIn)) {
    about.classList.remove("hidden");
    emailForm.classList.add("hidden");
  } else alert("Your email is invalid");
});

// Add hover Event

for (let i = 0; i < hover.length; i++) {
  // Hide button
  showMore[i].classList.add("hidden");

  //Toggle hidden content when click button
  showMore[i].addEventListener("click", function () {
    jobInfo[i].classList.toggle("hidden");
    if (showMore[i].textContent === "▾ Show more") {
      showMore[i].textContent = "▴ Show less";
    } else showMore[i].textContent = "▾ Show more";
  });

  //Hover event
  hover[i].addEventListener("mouseover", function () {
    showMore[i].classList.remove("hidden");
    hover[i].classList.add("shadow");
  });

  //Hide when mouse left
  hover[i].addEventListener("mouseleave", function () {
    hover[i].classList.remove("shadow");
    showMore[i].classList.add("hidden");
    jobInfo[i].classList.add("hidden");
    if (showMore[i].textContent === "▴ Show less") {
      showMore[i].textContent = "▾ Show more";
    }
  });
}
