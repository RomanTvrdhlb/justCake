import {
  toggleCustomClass,
  removeCustomClass,
  removeClassInArray,
} from "../functions/customFunctions";

const tooltipBlocks = document.querySelectorAll(".tooltip");

const tooltipHandler = (tooltips) => {
  let containerWidth = document.documentElement.clientWidth;

  tooltips &&
    tooltips.forEach(function (block) {
      if (containerWidth <= 576) {
        block &&
          block.addEventListener("click", function (e) {
            e.preventDefault();
            removeClassInArray(tooltips, "active");
            toggleCustomClass(block, "active");

            document.addEventListener("click", function (event) {
              const e = block;

              if (!e.contains(event.target)) removeCustomClass(block, "active");
            });
          });
      }
    });
};

window.addEventListener("resize", () => {
  tooltipHandler(tooltipBlocks);
});

window.addEventListener("DOMContentLoaded", () => {
  tooltipHandler(tooltipBlocks);
});
