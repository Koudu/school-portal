import addForm from "../AddForm/AddForm";
import lessonsList from "../LessonsList/LessonsList";
import store from "../../store/store";
import { addLessonAction } from "../../store/actions";

interface AccountComponentProps extends ComponentProps {
  title: string;
  day: string;
}

export default function AccountComponent(
  props: AccountComponentProps
): Component {
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
        <div class="AccountBlock">
          <div class="AccountAvatar" id="accaunt-avatarID"></div>
          <div class="AccountName" id="account-nameID"></div>
        </div>
    `;
    },
    onRender: () => {
      formContainer = props.parentEl.querySelector(`#account-nameID`);
      listContainer = props.parentEl.querySelector(`#accaunt-avatarID`);
      console.log(formContainer);
      console.log(listContainer);
      if (formContainer) {
        form = addForm({
          id: `account-nameID`,
          onSubmit,
          parentEl: formContainer,
        });
        form.render();
        form.onRender();
      }
      if (listContainer) {
        list = lessonsList({
          id: `accaunt-avatarID`,
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
