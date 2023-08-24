import addForm from "../AddForm/AddForm";
import lessonsList from "../LessonsList/LessonsList";
import store from "../../store/store";
import { addLessonAction } from "../../store/actions";

interface WeekComponentProps extends ComponentProps {
  title: string;
  day: string;
}

export default function WeekComponent(props: WeekComponentProps): Component {
  let formContainer: HTMLDivElement | null;
  let form: Component | null;

  let listContainer: HTMLDivElement | null;
  let list: Component | null;

  const onSubmit = (value: string) => {
    store.dispatch(addLessonAction(props.day, value));
  };
  return {
    render: () => {
      props.parentEl.innerHTML = `
      <div class="lessons">
        <div class="DayOfTheWeek"> ${props.title} 
          <div id=list-for-${props.id}></div>            
          <div id=form-for-${props.id}></div>
        </div>
      </div>
    `;
    },
    onRender: () => {
      formContainer = props.parentEl.querySelector(`#form-for-${props.id}`);
      listContainer = props.parentEl.querySelector(`#list-for-${props.id}`);
      console.log(formContainer);
      console.log(listContainer);
      if (formContainer) {
        form = addForm({
          id: `form-${props.id}`,
          onSubmit,
          parentEl: formContainer,
        });
        form.render();
        form.onRender();
      }
      if (listContainer) {
        list = lessonsList({
          id: `list-${props.id}`,
          parentEl: listContainer,
          day: props.day,
        });
        list.render();
        list.onRender();
      }
    },
    onDelete: () => {
      form?.onDelete();
      list?.onDelete();
    },
  };
}
