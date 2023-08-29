import store from "./store/store";
import "./style.css";
import { deleteLessonAction } from "./store/actions";
import Router from "./components/router/Router";

const root = document.getElementById("root");

const body = document.querySelector("body");
const MenuPanelID = document.getElementById("menu-panelID");

if (root) {
  const [_, firstLocation] = window.location.href.split("#");
  Router(root, firstLocation);
  window.addEventListener("popstate", () => {
    if (!root) {
      return;
    }
    const [_, location] = window.location.href.split("#");
    Router(root, location);
  });
}

body?.addEventListener("click", (e) => {
  if (!e.target) {
    return;
  }
  const name = (e.target as HTMLButtonElement).getAttribute("name");

  if (!name) {
    return;
  }
  if (name === "menu" && MenuPanelID) {
    if (MenuPanelID?.classList.contains("_inactive")) {
      MenuPanelID.classList.remove("_inactive");
      MenuPanelID.classList.add("_active");
      return;
    }
    MenuPanelID.classList.add("_inactive");
    MenuPanelID.classList.remove("_active");
  }

  const [listType, listName, index] = name.split("-");

  if (listType === "week") {
    store.dispatch(deleteLessonAction(listName, Number(index)));
  }
});
