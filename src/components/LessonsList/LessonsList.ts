import store from "../../store/store";

interface lessonsListProps extends ComponentProps {
  day: string;
}

export default function lessonsList(props: lessonsListProps): Component {
  let usub: () => void;
  // let lessonState: "edit" | "read" = "read";
  const onChangeState = (state: State) => {
    props.parentEl.innerHTML = `
        ${state.week[props.day]
          .map(
      (lesson: string, index: number) =>
              `<div class="lesson"> <span>${index + 1}. ${lesson}</span> <button class="DeleteBtn" name="week-${props.day}-${index}"></button> </div>`
    )
          .join("")}
      `;
  };
  return {
    render: () => onChangeState(store.getState()),
    onRender: () => {
      usub = store.subscribe(onChangeState);
    },
    onDelete: () => {
      usub();
    },
  };
}
