let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 992,
}

let elementName = {
  headerNav: '.header__nav',
  headerNavParentDesktop: '.header__logo',
  headerNavParentMobile: '.mobile__menu',

  headerLang: '.header__lang',
  headerLangDesktop: '.burger',
  headerLangMobile: '.mobile__menu',
}

let items = [...document.querySelectorAll('.wrapper')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavParentDesktop, elementName.headerNavParentMobile, replaceSettings.afterbegin, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.headerLang, elementName.headerLangDesktop, elementName.headerLangMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavParentDesktop, elementName.headerNavParentMobile, replaceSettings.afterbegin, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.headerLang, elementName.headerLangDesktop, elementName.headerLangMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);
});
