import storeNote from "../../store/storeNote";

export default function NoteList(props: ComponentProps): Component {
  let usub: () => void;
  const onChangeState = (state: State) => {
    props.parentEl.innerHTML = `
    <ul class="infolist" class="infolist" name="infolist">
      ${state.notes
    .map((task: string) =>`<li class="task">${task}</li>`).join("")}
    </ul>`;
  };
  return {
    render: () => onChangeState(storeNote.getState()),
    onRender: () => {
      usub = storeNote.subscribe(onChangeState);
    },
    onDelete: () => {
      usub();
    },
  };
}
