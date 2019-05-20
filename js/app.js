//hide preloader when all scripts, links, images have loaded
const eventListeners = () => {
  const ui = new UI();
  //window eventlistener
  window.addEventListener("load", () => {
    ui.hidePreloader();
  });

  //nav btn
  document.querySelector(".navBtn").addEventListener("click", () => {
    ui.toggleNav();
  });
};

function UI() {}

UI.prototype.hidePreloader = () => {
  document.querySelector(".preloader").style.display = "none";
};

UI.prototype.toggleNav = () => {
  document.querySelector(".nav").classList.toggle("nav--show");
};

eventListeners();
