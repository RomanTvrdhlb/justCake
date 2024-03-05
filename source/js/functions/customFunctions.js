// ----------------------------------------------------
export const removeCustomClass = (item, customClass = 'active') => {
  item.classList.remove(customClass);
}
// ----------------------------------------------------
export const toggleCustomClass = (item, customClass = 'active') => {
  item.classList.toggle(customClass);
}
// ----------------------------------------------------
export const addCustomClass = (item, customClass = 'active') => {
  item.classList.add(customClass);
}
// ----------------------------------------------------
export const removeClassInArray = (arr, customClass = 'active') => {
  arr.forEach((item) => {
    item.classList.remove(customClass);
  });
}
// ----------------------------------------------------
export const addClassInArray = (arr, customClass = 'active') => {
  arr.forEach((item) => {
    item.classList.add(customClass);
  });
}
// ----------------------------------------------------
export const toggleClassInArray = (arr, customClass = 'active') => {
  arr.forEach((item) => {
    item.classList.toggle(customClass);
  });
}
