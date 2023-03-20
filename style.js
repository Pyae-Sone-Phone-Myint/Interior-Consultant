const navLink = document.querySelectorAll(".nav-link");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const close = document.querySelector(".close");

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLink.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
    navbarMenu.classList.remove("active");
    close.style.display = "none";
  });
});

hamburgerMenu.addEventListener("click", () => {
  navbarMenu.classList.add("active");
  close.style.display = "block";
});

close.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
  close.style.display = "none";
});
