import {toggleCustomClass, removeCustomClass, toggleClassInArray, removeClassInArray} from '../functions/customFunctions';
const burgers = document.querySelectorAll(".burger");
const mobileMenu = document.querySelector(".mobile");
const header = document.querySelector(".header");

const mobileMenuHandler = function (mobileMenu, burgers) {
  burgers.forEach((burger) => {
    burger.addEventListener("click", function (e) {
      e.preventDefault();
      toggleCustomClass(header, "active");
      toggleCustomClass(mobileMenu);
      toggleClassInArray(burgers);
    });
  });
};

if (burgers) {
  mobileMenuHandler(mobileMenu, burgers);
}




