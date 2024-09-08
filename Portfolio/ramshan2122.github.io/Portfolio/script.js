// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});
