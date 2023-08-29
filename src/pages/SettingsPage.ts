import NotesComponent from "../components/NotesComponent/NoteComponent";
import WeekComponent from "../components/WeekComponent/WeekComponent";

export default function MainPage(props: ComponentProps): Component {
  let menu: HTMLDivElement | null = null;
  let blockContainer: HTMLDivElement | null = null;

  const components: Component[] = [];
  return {
    render() {
      props.parentEl.innerHTML = `
        <div class="BlockMenu" id="block-menu">
          <button class="account"> Аккаунт </button>
          <button class="theme"> Темы </button>
        </div>

        <div class="BigBlock" id="big-block">
        <div class="AccountBlock">
          <div class="AccountAvatar"></div>
          <div class="AccountName"></div>
        </div>
        
        <div class="ThemeBlock">
          <button class="DarkTheme"></button>
          <button class="LightTheme"></button>
        </div>
      `;
    },
    onRender() {
      menu = props.parentEl.querySelector("#block-menu");
      blockContainer = props.parentEl.querySelector("#big-block");

      if (menu) {
        const createBlockMenu = (day: string, id: string, title: string) => {
          const element = document.createElement("div");
          const weekComponent = WeekComponent({
            day,
            id,
            title,
            parentEl: element,
          });
          weekComponent.render();
          weekComponent.onRender();
          menu!.appendChild(element);
          return weekComponent;
        };


      if (blockContainer) {
        const notesComponent = NotesComponent({
          id: "notes",
          parentEl: blockContainer,
        });
        notesComponent.render();
        notesComponent.onRender();
        components.push(notesComponent)
      }
    },
    onDelete() {
      components.forEach((c) => c.onDelete());
    },
  };
}
