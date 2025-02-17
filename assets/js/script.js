const swiper = new Swiper(".mySwiper", {
  // Optional parameters

  direction: "vertical",
  loop: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  speed: 1500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const ul = document.getElementById("list");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("show");
  nav.classList.toggle("visible");
  hamburger.classList.toggle("active"); // You can add a rotating effect here, if desired
});

window.addEventListener("resize", (event) => {
  const visible = document.querySelector(".visible");

  if (window.matchMedia("(min-width: 768px)").matches && visible) {
    visible.classList.remove("visible");
    hamburger.classList.remove("active");
  }
});
