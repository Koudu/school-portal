import addForm from "../AddForm/AddForm";
import NoteList from "../LessonsList/NoteList";
import storeNote from "../../store/storeNote";
import { addNoteAction } from "../../store/actionsNote";

export default function NotesComponent(props: ComponentProps): Component {
  let formContainer: HTMLDivElement | null;
  let form: Component | null;

  let listContainer: HTMLDivElement | null;
  let list: Component | null;

  const onSubmit = (value: string) => {
    storeNote.dispatch(addNoteAction(value));
  };
  return {
    render: () => {
      props.parentEl.innerHTML = `
      <div class="NameNotes"> Заметки </div>
      <div id=listNote-for-${props.id}></div>  
      <div id=formNote-for-${props.id}></div>
    `;
    },
    onRender: () => {
      formContainer = props.parentEl.querySelector(`#formNote-for-${props.id}`);
      listContainer = props.parentEl.querySelector(`#listNote-for-${props.id}`);

      if (formContainer) {
        form = addForm({
          id: `notes-form-${props.id}`,
          onSubmit,
          parentEl: formContainer,
        });
        form.render();
        form.onRender();
      }
      if (listContainer) {
        list = NoteList({
          id: `list-${props.id}`,
          parentEl: listContainer,
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
