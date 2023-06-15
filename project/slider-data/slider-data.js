import SecondImage from "../../icon/image-2.jpg";

[...document.getElementsByClassName("second-container")].map((data) => {
  data.innerHTML = ` 

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
    `;
});
