const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".navbar");
const closeNav = document.querySelector(".icon");
console.log(navBtn);
navBtn.addEventListener("click", () => {
  navBar.classList.add("show-nav");
});
closeNav.addEventListener("click", () => {
  navBar.classList.remove("show-nav");
});
