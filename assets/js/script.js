// On Load //

//   Populate Jumbotron

//   Populate Cards

//   Confirm cookies
// https://www.jqueryscript.net/other/GDPR-Cookie-Consent-Bootstrap-4-bsgdprcookies.html
/*document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("body").bsgdprcookies();
});*/
// On Click //

//   Register form

class Account {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
// Checking "conditions" activates the register button
document.getElementById("conditions").addEventListener("change", (event) => {
  if (event.target.checked) {
    document.getElementById("register").classList.add("active");
  } else {
    document.getElementById("register").classList.remove("active");
  }
});
// Clicking "register" creates a new account or sends an alert
document.getElementById("register").addEventListener("click", () => {
  if (document.getElementById("password1") === document.getElementById("password2")) {
    var newAccount = new Account(username, email, password);
    newAccount.username = document.getElementById("username1");
    newAccount.email = document.getElementById("email");
    newAccount.password = document.getElementById("password1");
  } else {
    alert("Passwords do not match");
  }
});

//   Login form
document.getElementById("login").addEventListener("click", () => {
  if (document.getElementById("username") === newAccount.username && document.getElementById("password") === newAccount.password) {
    alert("You are now logged in!");
  } else {
    alert("Please check your username and password or create an account");
  }
});

//   Footer arrow
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
