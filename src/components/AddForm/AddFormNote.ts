interface AddFormProps extends ComponentProps {
  onSubmit: (value: string) => void;
}

export default function addForm(props: AddFormProps): Component {
  let form: HTMLFormElement | null;
  let input: HTMLInputElement | null;
  const submit = (event: Event) => {
    event.preventDefault();
    if (input) {
      props.onSubmit(input.value);
      input.value = "";
    }
  };
  return {
    render: () => {
      props.parentEl.innerHTML = `
      <form id="${props.id}">
        <div class="TextInputBlock">
          <textarea class="TextInputNote" id="input-${props.id}"  placeholder="Введите тест..."></textarea>
          <input type="submit" class="addNote" value="Добавить" name="add" />
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
