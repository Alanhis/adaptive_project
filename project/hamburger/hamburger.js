import { toogleBurger } from "./toogle";
import "./hamburgers.css";
document.querySelector(".hamburger-menu").innerHTML = ` 
<button class="hamburger hamburger--collapse" type="button">
<span class="hamburger-box">
  <span class="hamburger-inner"></span>
</span>
</button>
`;
toogleBurger();
