const items = document.querySelectorAll(".timeline li");
// Finding the element is in view port or not
let isElementInViewPort = function (element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
// Callback function for every list item
let callbackFunc = function () {
  for (let i = 0; i < items.length; i++)
    if (isElementInViewPort(items[i])) items[i].classList.add("in-view");
};
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
