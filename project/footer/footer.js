import Logo from "../../icon/logo.svg";
import InstagramLogo from "../../icon/instagram.svg";
import WhatAppLogo from "../../icon/whatapp.svg";
import TelegramLogo from "../../icon/telegram.svg";
import "./footer.scss";
document.querySelector("footer").innerHTML = ` 
<img class="footer-logo" src=${Logo} />
      <div class="footer-selecter-container ">
        <SelecterComponent />
      </div>
      <div class="footer-icon-container">
        <img class="footer-icon" src=${InstagramLogo} />
        <img class="footer-icon" src=${WhatAppLogo} />
        <img class="footer-icon" src=${TelegramLogo} />
      </div>`;
