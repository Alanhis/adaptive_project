import MainImage from "../../icon/image-1.jpg";
import SecondImage from "../../icon/image-2.jpg";
import PointLeft from "../../icon/point-left.svg";
import PointRight from "../../icon/point-right.svg";
import "./main.scss";

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
<section class="second-container">
<div class="second-text-container">
  <p class="second-main-text">CHECK-UP</p>
  <p class="second-main-info-text">для мужчин</p>
  <ul>
    <li>Гормональный скрининг</li>
    <li>Тестостерон</li>
    <li>Свободный тестостерон</li>
    <li>Глобулин, связывающий половые гормоны</li>
  </ul>
  <div class="price-container">
    <p class="price">Всего 2800₽ </p>
    <p class="sales">3500₽</p>
  </div>
  <div class="button-container">
    <button class="sales-main-button">Записаться</button>
    <button class="sales-offbutton">Подробнее</button>
  </div>
</div>
<img class="second-pic" src=${SecondImage} />
</section>
<div class="scroll-container">
<img class="scroll-pointer" src=${PointLeft} />
<p class="scroll-main-text">
  1<span class="scroll-unactive-text">/4</span>
</p>
<img class="scroll-pointer" src=${PointRight} />
</div>`;
