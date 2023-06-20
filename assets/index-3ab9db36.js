(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
<header></header>
<main class="main"></main>
<footer class="footer-container"> </footer>
`;const l="https://alanhis.github.io/adaptive_project/assets/logo-a52b8ed2.svg",m="https://alanhis.github.io/adaptive_project/assets/map-39ef8ea1.svg",d="https://alanhis.github.io/adaptive_project/assets/whatapp-f2fa392a.svg";document.querySelector("header").innerHTML=` 
  <section class="container main-header-contariner">
  <div class ="hamburger-menu"> </div>
    <section class="container container-data">
    
      <img src=${l} alt="Лого компании" />
      <div class="container contaner-place">
        <img class="icon-place" src=${m} alt="Местоположение" />
        <div>
          <p class="header-text city-text">Ростов-на-Дону</p>
          <p class="street-text">ул.Ленина, 2Б</p>
        </div>
      </div>
    </section>
    <div class="container">
      <img src=${d} class="icon" alt="WhatApp лого" />
      <p class="header-text">+7(863) 000 00 00</p>
      <button class="button"> Записаться на прием</button>
    </div>
  </section>
  <section class="container-selector">
  <div class="selector"></div>
    <button class="button-seletion"> Записаться на прием</button>
  </section>
`;const u="https://alanhis.github.io/adaptive_project/assets/image-1-dd9c478d.jpg",p="https://alanhis.github.io/adaptive_project/assets/point-left-0178e840.svg",g="https://alanhis.github.io/adaptive_project/assets/point-right-be17c049.svg";let n=1;document.querySelector("main").innerHTML=` 
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
<img class="main-pic" src=${u} />
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
<img class="scroll-pointer btn-left" src=${p} />
<p class="scroll-main-text">
  ${n}<span class="scroll-unactive-text">/4</span>
</p>
<img class="scroll-pointer btn-right" src=${g} />
</div>`;document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementsByClassName("btn-left")[0],c=document.getElementsByClassName("btn-right")[0],a=ItcSlider.getOrCreateInstance(".slider",{loop:!0});t.addEventListener("click",()=>{a.slidePrev(),--n,n==0&&(n=4),document.querySelector(".scroll-main-text").innerHTML=` ${n}<span class="scroll-unactive-text">/4</span> `}),c.addEventListener("click",()=>{a.slideNext(),++n,n==5&&(n=1),document.querySelector(".scroll-main-text").innerHTML=` ${n}<span class="scroll-unactive-text">/4</span> `})});const v="https://alanhis.github.io/adaptive_project/assets/instagram-b073ae20.svg",f="https://alanhis.github.io/adaptive_project/assets/telegram-3c86afef.svg";document.querySelector("footer").innerHTML=` 
<img class="footer-logo" src=${l} />
      <div class="footer-selecter-container ">
        <div class="selector"></div>
      </div>
      <div class="footer-icon-container">
        <img class="footer-icon" src=${v} />
        <img class="footer-icon" src=${d} />
        <img class="footer-icon" src=${f} />
      </div>`;document.querySelector(".container-selector").innerHTML=` 
<a class="selector-text">О клинике</a>
<a class="selector-text">Услуги</a>
<a class="selector-text">Специалисты</a>
<a class="selector-text">Цены</a>
<a class="selector-text">Контакты</a>
`;document.querySelector(".footer-selecter-container").innerHTML=` 
<a class="selector-text">О клинике</a>
<a class="selector-text">Услуги</a>
<a class="selector-text">Специалисты</a>
<a class="selector-text">Цены</a>
<a class="selector-text">Контакты</a>
`;function b(){var t=document.getElementsByClassName("hamburger-menu");t[0].addEventListener("click",()=>{var c=document.getElementsByClassName("hamburger--collapse")[0];c.classList.contains("is-active")===!1?(c.classList.add("is-active"),document.getElementsByClassName("container-selector")[0].classList.add("open-mobilse-selector")):(c.classList.remove("is-active"),document.getElementsByClassName("container-selector")[0].classList.remove("open-mobilse-selector"))})}document.querySelector(".hamburger-menu").innerHTML=` 
<button class="hamburger hamburger--collapse" type="button">
<span class="hamburger-box">
  <span class="hamburger-inner"></span>
</span>
</button>
`;b();const y="https://alanhis.github.io/adaptive_project/assets/image-2-060d19d2.jpg";[...document.getElementsByClassName("second-container")].map(t=>{t.innerHTML=` 

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
    <img class="second-pic" src=${y} />
    `});var o=document.getElementById("myModal"),L=[...document.getElementsByClassName("sales-main-button")],h=document.getElementsByClassName("close")[0];L.forEach(t=>{t.addEventListener("click",()=>{o.style.display="block"})});h.onclick=function(){o.style.display="none"};window.onclick=function(t){t.target==o&&(o.style.display="none")};
