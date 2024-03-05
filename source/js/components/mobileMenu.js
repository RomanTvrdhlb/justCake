const breakpoint = 992;

const mobileMenu = function() {
  const menu = document.querySelector('.nav__menu');
  const navLi = menu.querySelector('.extended');
  const navExtendedTrigger = menu.querySelector('span');

  navExtendedTrigger.addEventListener('click', () => {
    navLi.classList.toggle('active');
    console.log('click');
  })
}

const mobileMenuInit = () => {
  let containerWidth = document.documentElement.clientWidth;

  if (containerWidth <= breakpoint) {
    mobileMenu();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  mobileMenuInit();
});

window.addEventListener("resize", () => {
  mobileMenuInit();
});
