const header = document.querySelector("#header");

let oldScrollY = window.scrollY;
window.onscroll = function () {
  if (oldScrollY > window.scrollY) {
    console.log("top");
    header.classList.remove("header-top");
  } else {
    console.log("down");
    header.classList.add("header-top");
  }
  oldScrollY = window.scrollY;
};
