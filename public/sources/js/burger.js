var burger = document.querySelector(".burger");
var closeCross = document.querySelector(".close-sidebar");
var nav = document.querySelector(".sidebar");

burger.onclick = function () {
  nav.classList.add("to-left-menu");
  $(".logo-fixed-header").addClass("darkHeader");
};

closeCross.onclick = function () {
  nav.classList.remove("to-left-menu");
  $(".logo-fixed-header").removeClass("darkHeader");
};
