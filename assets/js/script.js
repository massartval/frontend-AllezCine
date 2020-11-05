// On Load

// Populate Jumbotron

// Populate Cards

// Confirm cookies

// On Click

// Register form

// Login form

// Footer arrow
// let arrowToTop = document.getElementById("footer-arrow");
let arrowToTop;
window.addEventListener("scroll", () => {
  toggleArrow();
});
function toggleArrow() {
  if (window.pageYOffset > 100) {
    arrowToTop = document.createElement("button"); // Create a <button> element
    arrowToTop.innerHTML = "Back to top"; // Insert text
    document.body.appendChild(arrowToTop); // Append <button> to <body>
  } else {
    arrowToTop.remove();
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
