import addForm from "../AddForm/AddForm";
import lessonsList from "../LessonsList/LessonsList";
import store from "../../store/store";
import { addLessonAction } from "../../store/actions";

interface BlockComponentProps extends ComponentProps {
  title: string;
  day: string;
}

export default function BlockComponent(props: BlockComponentProps): Component {
  let accauntContainer: HTMLDivElement | null;
  let form: Component | null;

  let themeContainer: HTMLDivElement | null;
  let list: Component | null;
  const onSubmit = (value: string) => {
    store.dispatch(addLessonAction(props.day, value));
  };
  return {
    render: () => {
      props.parentEl.innerHTML = `
        <div class="BlockMenu" id="block-menu">
          <button class="account" id="accauntID"> Аккаунт </button>
          <button class="theme" id="themeID"> Темы </button>
        </div>
    `;
    },
    onRender: () => {
      accauntContainer = props.parentEl.querySelector(`#accauntID`);
      themeContainer = props.parentEl.querySelector(`#themeID`);
      console.log(accauntContainer);
      console.log(themeContainer);
      if (accauntContainer) {
        form = addForm({
          id: `accountID`,
          onSubmit,
          parentEl: accauntContainer,
        });
        form.render();
        form.onRender();
        if (themeContainer) {
          list = lessonsList({
            id: `theme`,
            parentEl: themeContainer,
            day: props.day,
          });
          list.render();
          list.onRender();
        }
      }
      onDelete: () => {
        form?.onDelete();
        list?.onDelete();
      };
    },
  };
}
