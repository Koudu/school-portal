import WeekComponent from "./components/WeekComponent/WeekComponent";
import NotesComponent from "./components/NotesComponent/NoteComponent";
import "./style.css";

const days = document.getElementById("weekDays");
const notesContainer = document.getElementById("notes-container");

if (days) {
  const createWeekDay = (day: string, id: string, title: string) => {
    const element = document.createElement("div");
    const weekComponent = WeekComponent({
      day,
      id,
      title,
      parentEl: element,
    });
    weekComponent.render();
    weekComponent.onRender();
    days.appendChild(element);
  };

  createWeekDay("Mon", "monday-component", "Понедельник");
  createWeekDay("Tue", "tuesday-component", "Вторник");
  createWeekDay("Wen", "wensday-component", "Среда");
  createWeekDay("Thu", "thursday-component", "Четверг");
  createWeekDay("Fri", "friday-component", "Пятница");
}

if (notesContainer) {
  const notesComponent = NotesComponent({
    id: "notes",
    parentEl: notesContainer,
  });
  notesComponent.render();
  notesComponent.onRender();
}

const body = document.querySelector("body");
const MenuPanelID = document.getElementById("menu-panelID");

body?.addEventListener("click", (e) => {
  const name = e.target.getAttribute("name");
  if (name === "menu" && MenuPanelID) {
    if (MenuPanelID?.classList.contains("_inactive")) {
      MenuPanelID.classList.remove("_inactive");
      MenuPanelID.classList.add("_active");
      return;
    }
    MenuPanelID.classList.add("_inactive");
    MenuPanelID.classList.remove("_active");
  }
});
