// On Load

// Populate Jumbotron

// Populate Cards

// Confirm cookies

// On Click

// Register form

// Login form

// Footer arrow
let arrowToTop = document.getElementById("footer-arrow");

window.addEventListener("scroll", () => {
  toggleArrow();
});
function toggleArrow() {
  if (window.pageYOffset > 100) {
    arrowToTop.style.display = "block";
  } else {
    arrowToTop.style.display = "none";
  }
  // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  // https://www.youtube.com/watch?v=SJVCvnKM_lI
}

arrowToTop.addEventListener("click", () => {
  backToTop();
});
function backToTop() {
  window.pageYOffset = 0;
}
