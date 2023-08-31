import addForm from "../AddForm/AddForm";
import lessonsList from "../LessonsList/LessonsList";
import store from "../../store/store";
import { addLessonAction } from "../../store/actions";

interface ThemeComponentProps extends ComponentProps {
  title: string;
  day: string;
}

export default function ThemeComponent(props: ThemeComponentProps): Component {
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
        <div class="ThemeBlock">
          <button class="DarkTheme" id="dark-themeID"></button>
          <button class="LightTheme" id="light-themeID"></button>
        </div>
    `;
    },
    onRender: () => {
      formContainer = props.parentEl.querySelector(`#light-themeID`);
      listContainer = props.parentEl.querySelector(`#dark-themeID`);
      console.log(formContainer);
      console.log(listContainer);
      if (formContainer) {
        form = addForm({
          id: `light-themeID`,
          onSubmit,
          parentEl: formContainer,
        });
        form.render();
        form.onRender();
      }
      if (listContainer) {
        list = lessonsList({
          id: `dark-themeID`,
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
