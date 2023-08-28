interface AddFormProps extends ComponentProps {
  onSubmit: (value: string) => void;
}

export default function addFormNote(props: AddFormProps): Component {
  let form: HTMLFormElement | null;
  let input: HTMLInputElement | null;
  const submit = (event: Event) => {
    event.preventDefault();
    if (input) {
      props.onSubmit(input.innerText);
      input.innerText = "";
    }
  };
  return {
    render: () => {
      props.parentEl.innerHTML = `
      <form id="${props.id}">
        <div class="TextInputBlock">
          <div class="InputArea" id="input-${props.id}" contenteditable="true"></div>
          <input type="submit" class="add" value="Добавить" name="add" />
        </div>
      </form>
    `;
    },
    onRender: () => {
      form = props.parentEl.querySelector(`#${props.id}`);
      input = props.parentEl.querySelector(`#input-${props.id}`);
      form?.addEventListener("submit", submit);
    },
    onDelete: () => {
      form?.removeEventListener("submit", submit);
    },
  };
}
