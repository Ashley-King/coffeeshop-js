//hide preloader when all scripts, links, images have loaded
//constructor function
class UI {
  constructor() {}
}

UI.prototype.hidePreloader = () => {
  document.querySelector(".preloader").style.display = "none";
};

UI.prototype.toggleNav = () => {
  document.querySelector(".nav").classList.toggle("nav--show");
};

UI.prototype.videoControls = () => {
  let btn = document.querySelector(".video__switch-btn");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
};

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

  //control video
  document.querySelector(".video__switch").addEventListener("click", () => {
    ui.videoControls();
  });
};

eventListeners();
