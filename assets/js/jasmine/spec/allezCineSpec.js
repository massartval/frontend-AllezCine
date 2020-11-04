xdescribe("on load", () => {
  it("should populate the jumbotron with movie datas", () => {
    //jumbotron
  });
  it("should populate the movie cards with movie datas", () => {
    // featured movies
    // shop movies
  });
  it("should display the cookie warning", () => {
    expect(confirmGDPR).toBeDefined();
  });
});

describe("on click on register", () => {
  it("should display a pop-up with a register form", () => {
    expect();
  });
});

describe("on click on login", () => {
  it("should display a pop-up with a login form", () => {
    expect();
  });
});

xdescribe("on scroll from the top of the page", () => {
  it("should create the arrow button", () => {
    window.pageYOffset = 200;
    expect(arrowToTop.style.display).toEqual("block");
    window.pageYOffset = 0;
    expect(arrowToTop.style.display).toEqual("none");
  });
});

describe("on click on footer arrow", () => {
  it("should send the viewport back to the top of the page", () => {
    expect();
  });
});
