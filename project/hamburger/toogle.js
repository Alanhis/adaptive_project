export function toogleBurger() {
  var burger = document.getElementsByClassName("hamburger-menu");
  burger[0].addEventListener("click", () => {
    var burgerStatus = document.getElementsByClassName(
      "hamburger--collapse"
    )[0];
    if (burgerStatus.classList.contains("is-active") === false) {
      burgerStatus.classList.add("is-active");
      document
        .getElementsByClassName("container-selector")[0]
        .classList.add("open-mobilse-selector");
    } else {
      burgerStatus.classList.remove("is-active");
      document
        .getElementsByClassName("container-selector")[0]
        .classList.remove("open-mobilse-selector");
    }
    console.log(burgerStatus.classList.contains("is-active"));
  });
}
