//hide preloader when all scripts, links, images have loaded
//window even listener
window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

//nav btn
document.querySelector(".navBtn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("nav--show");
});
