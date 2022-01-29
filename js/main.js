(function () {
  let burger = document.querySelector(".burger");
  let menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

const count_up = (number, element) => {
  const delay = (Number(number) + 1) / 10;

  let count = 0;

  const timer = setInterval(function () {
    element.innerHTML = count.toString();
    if (count >= number) {
      clearInterval(timer);
    }
    count++;
  }, delay);
};

(function () {
  const today = new Date();
  const todaysYear = today.getFullYear();
  const sogyo = todaysYear - 1955;
  const element = document.getElementById("sogyo");
  count_up(sogyo, element);
})();
