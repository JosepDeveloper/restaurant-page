import "./style.css";
import { $, $$ } from "./src/services/document";
import { clickButtons } from "./src/buttons";
import { setContent } from "./src/setContent";
import { header } from "./src/componenst/header";
import { footer } from "./src/componenst/footer";

$("#app").innerHTML = `
  <div>
    ${header}
    <div class="content"></div>
    ${footer}
  </div>
`;

export const textContent = $(".content");

setContent(textContent);
clickButtons($$(".buttons"));
