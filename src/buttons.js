import { textContent } from "../main";
import { setContent } from "./setContent";

export const clickButtons = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(this.innerText);
      setContent(textContent, this.innerText);
    });
  });
};
