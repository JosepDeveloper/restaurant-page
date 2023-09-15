import { contact, home, menu } from "./content";
import { PAGES_OPTIONS } from "./pages-options";

export const setContent = (content, page = "home") => {
  const lowerCasePage = page.toLocaleLowerCase();

  if (lowerCasePage === PAGES_OPTIONS.home) {
    content.innerHTML = home;
  }

  if (lowerCasePage === PAGES_OPTIONS.contact) {
    content.innerHTML = contact;
  }

  if (lowerCasePage === PAGES_OPTIONS.menu) {
    content.innerHTML = menu;
  }
};
