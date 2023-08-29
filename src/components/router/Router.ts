import MainPage from "../../pages/MainPage";

export default function Router(elemet: HTMLElement, location: string): void {
  let page: Component | null = null;
  switch (location) {
    case "/evaluations":
      elemet.innerHTML = "Оценки";
      break;
    case "/settings":
      elemet.innerHTML = "Настройки";
      break;
    default:
      page = MainPage({
        id: "main-page",
        parentEl: elemet,
      });
      page.render();
      page.onRender();
  }
}
