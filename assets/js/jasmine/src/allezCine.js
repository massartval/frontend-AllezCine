document.addEventListener("DOMContentLoaded", confirmGDPR());

function confirmGDPR() {
  // https://getbootstrap.com/docs/4.0/components/modal/
  // https://www.jqueryscript.net/other/GDPR-Cookie-Consent-Bootstrap-4-bsgdprcookies.html
}

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

// breaks Jasmine !!! Why ???
/*arrowToTop.addEventListener("click", () => {
  backToTop();
});*/

function backToTop() {
  window.pageYOffset = 0;
}

// https://stackoverflow.com/questions/28008796/jasmine-spies-and-stub-method
// https://stackoverflow.com/questions/16890618/test-for-click-event-using-jasmine-test-suite
