const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
  });
});
