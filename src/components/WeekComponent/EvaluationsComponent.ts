import addForm from "../AddForm/AddForm";
import store from "../../store/store";
import { addLessonAction } from "../../store/actions";

interface GradesComponentProps extends ComponentProps {
  title: string;
  day: string;
}

export default function GradesComponent(
  props: GradesComponentProps
): Component {
  let formContainer: HTMLDivElement | null;
  let form: Component | null;

  const onSubmit = (value: string) => {
    store.dispatch(addLessonAction(props.day, value));
  };
  return {
    render: () => {
      props.parentEl.innerHTML = `
      <div class="GradesBySubject" id="grades-by-subject">

        <div class="Evaluations __English">

        </div>
        <div class="Evaluations __Biology">

        </div>
        <div class="Evaluations __Geography">

        </div>
        <div class="Evaluations __ComputerScience">

        </div>
        <div class="Evaluations __History">

        </div>
        <div class="Evaluations __Literature">

        </div>
        <div class="Evaluations __Algebra">

        </div>
        <div class="Evaluations __Geometry">

        </div>
        <div class="Evaluations __Music">

        </div>
        <div class="Evaluations __OBZH">

        </div>
        <div class="Evaluations __SocialStudies">

        </div>
        <div class="Evaluations __Russian">

        </div>
        <div class="Evaluations __Physics">

        </div>
        <div class="Evaluations __PhysicalCulture">

        </div>
        <div class="Evaluations __French">

        </div>
        <div class="Evaluations __Chemistry">

        </div>

      </div>
    `;
    },
    onRender: () => {
      formContainer = props.parentEl.querySelector(`#grades-by-subject`);
      console.log(formContainer);
      if (formContainer) {
        form = addForm({
          id: `grades-by-subject`,
          onSubmit,
          parentEl: formContainer,
        });
        form.render();
        form.onRender();
      }
    },
    onDelete: () => {
      form?.onDelete();
    },
  };
}
