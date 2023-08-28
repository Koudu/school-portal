import store from "../../store/store";

interface lessonsListProps extends ComponentProps {
  day: string;
}

export default function lessonsList(props: lessonsListProps): Component {
  let usub: () => void;
  const onChangeState = (state: State) => {
    props.parentEl.innerHTML = `
        ${state.week[props.day]
          .map(
      (lesson: string, index: number) =>
              `<div class="lesson"> ${index + 1}. ${lesson} <form><button class="PlusBtn"></button></form></div>`
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
