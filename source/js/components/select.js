// Select
let selects = document.querySelectorAll('.lang');

let selectScript = function (select) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".lang__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerHTML;

      if (el === "choosen" && selectCurrent.innerHTML !== text) {
          selectCurrent.innerHTML = text;
      }

        item.classList.toggle("is-active");
    });

    document.addEventListener("click", function (event) {
        if (!item.contains(event.target)) {
          item.classList.remove("is-active");
        }
    });
  });
}

selectScript(selects);

