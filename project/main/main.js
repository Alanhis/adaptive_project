import MainImage from "../../icon/image-1.jpg";

import PointLeft from "../../icon/point-left.svg";
import PointRight from "../../icon/point-right.svg";
import "./main.scss";
let counter = 1;
document.querySelector("main").innerHTML = ` 
<section class="main-section">
<div class="main-text-container">
  <p class="main-text">
    Многопрофильная клиника для детей и взрослых
  </p>
  <p class="main-text-info">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua
  </p>
</div>
<img class="main-pic" src=${MainImage} />
</section>

<div class="itc-slider slider" >
  <div class="itc-slider-wrapper">
    <div class="itc-slider-items">
      <div class="itc-slider-item">
      <section class="second-container"></section>
      </div>
      <div class="itc-slider-item">
      <section class="second-container"></section>
      </div>
      <div class="itc-slider-item">
      <section class="second-container"></section>
      </div>
    </div>
  </div>
  <!-- Кнопки для перехода к предыдущему и следующему слайду -->

</div>

<div class="scroll-container">
<img class="scroll-pointer btn-left" src=${PointLeft} />
<p class="scroll-main-text">
  ${counter}<span class="scroll-unactive-text">/4</span>
</p>
<img class="scroll-pointer btn-right" src=${PointRight} />
</div>`;
document.addEventListener("DOMContentLoaded", () => {
  const btnPrev = document.getElementsByClassName("btn-left")[0];

  const btnNext = document.getElementsByClassName("btn-right")[0];

  const slider = ItcSlider.getOrCreateInstance(".slider", { loop: true });

  btnPrev.addEventListener("click", () => {
    slider.slidePrev();
    --counter;
    if (counter == 0) {
      counter = 4;
    }
    document.querySelector(
      ".scroll-main-text"
    ).innerHTML = ` ${counter}<span class="scroll-unactive-text">/4</span> `;
  });
  btnNext.addEventListener("click", () => {
    slider.slideNext();

    ++counter;
    if (counter == 5) {
      counter = 1;
    }
    document.querySelector(
      ".scroll-main-text"
    ).innerHTML = ` ${counter}<span class="scroll-unactive-text">/4</span> `;
  });
});
