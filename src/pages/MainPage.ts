import NotesComponent from "../components/NotesComponent/NoteComponent";
import WeekComponent from "../components/WeekComponent/WeekComponent";

export default function MainPage(props: ComponentProps): Component {
  let days: HTMLDivElement | null = null;
  let notesContainer: HTMLDivElement | null = null;

  const components: Component[] = [];
  return {
    render() {
      props.parentEl.innerHTML = `
      <div class="TheMainPart">
        <div  id="weekDays" class="LessonsForAWeek">
        </div>

        <div class="small">
          <div class="notes" id="notes-container"></div>
    
          <div class="average-rating"> 
            <div class="average-ratingName"> Средний бал по всем предметам </div>
          </div>
      </div>

    </div>
      `;
    },
    onRender() {
      days = props.parentEl.querySelector("#weekDays");
      notesContainer = props.parentEl.querySelector("#notes-container");

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
          days!.appendChild(element);
          return weekComponent;
        };

        components.push(
          createWeekDay("Mon", "monday-component", "Понедельник")
        );
        components.push(createWeekDay("Tue", "tuesday-component", "Вторник"));
        components.push(createWeekDay("Wen", "wensday-component", "Среда"));
        components.push(createWeekDay("Thu", "thursday-component", "Четверг"));
        components.push(createWeekDay("Fri", "friday-component", "Пятница"));
      }

      if (notesContainer) {
        const notesComponent = NotesComponent({
          id: "notes",
          parentEl: notesContainer,
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
