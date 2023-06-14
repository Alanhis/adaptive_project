// import Hamburger from "hamburger-react";
import "./header.scss";
import Logo from "../../icon/logo.svg";
import MapSVG from "../../icon/map.svg";
import WhatAppSVG from "../../icon/whatapp.svg";

document.querySelector("header").innerHTML = ` 
  <section class="container main-header-contariner">
    <section class="container container-data">
      <img src=${Logo} alt="Лого компании" />
      <div class="container contaner-place">
        <img class="icon-place" src=${MapSVG} alt="Местоположение" />
        <div>
          <p class="header-text city-text">Ростов-на-Дону</p>
          <p class="street-text">ул.Ленина, 2Б</p>
        </div>
      </div>
    </section>
    <div class="container">
      <img src=${WhatAppSVG} class="icon" alt="WhatApp лого" />
      <p class="header-text">+7(863) 000 00 00</p>
      <button class="button"> Записаться на прием</button>
    </div>
  </section>
  <section class="container-selector">
    
    <button class="button-seletion"> Записаться на прием</button>
  </section>
`;
