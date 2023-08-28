interface AddFormProps extends ComponentProps {
  onSubmit: (value: string) => void;
}

export default function addForm(props: AddFormProps): Component {
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
        <select>
          <option selected> -- Выберите предмет -- </option>
          <option value> Английский </option>
          <option value> Биология </option>
          <option value> География </option>
          <option value> Информатика </option>
          <option value> История </option>
          <option value> Литература </option>
          <option value> Алгебра </option>
          <option value> Геометрия </option>
          <option value> Музыка </option>
          <option value> Обществознание </option>
          <option value> Рус. язык </option>
          <option value> Физика </option>
          <option value> Физ-ра </option>
          <option value> Франц. язык </option>
          <option value> Химия </option>
        </select>
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
