import  from "../components/WeekComponent/EvaluationsComponent";

export default function MainPage(props: ComponentProps): Component {
  const GradesComponent: HTMLDivElement | null = null;

  const components: Component[] = [];
  return {
    render() {
      props.parentEl.innerHTML = `
      <div class="GradesBySubject" id="grades-by-subject">

        <div class="EvaluationsEnglish">

        </div>
        <div class="EvaluationsBiology">

        </div>
        <div class="EvaluationsGeography">

        </div>
        <div class="EvaluationsComputerScience">

        </div>
        <div class="EvaluationsHistory">

        </div>
        <div class="EvaluationsLiterature">

        </div>
        <div class="EvaluationsAlgebra">

        </div>
        <div class="EvaluationsGeometry">

        </div>
        <div class="EvaluationsMusic">

        </div>
        <div class="EvaluationsOBZH">

        </div>
        <div class="EvaluationsSocialStudies">

        </div>
        <div class="EvaluationsRussian">

        </div>
        <div class="EvaluationsPhysics">

        </div>
        <div class="EvaluationsPhysicalCulture">

        </div>
        <div class="EvaluationsFrench">

        </div>
        <div class="EvaluationsChemistry">

        </div>

      </div>
      `;
    },
    onRender() {
      notesContainer = props.parentEl.querySelector("#grades-by-subject");

      if (notesContainer) {
        const notesComponent = NotesComponent({
          id: "notes",
          parentEl: notesContainer,
        });
        notesComponent.render();
        notesComponent.onRender();
        components.push(notesComponent);
      }
    },
    onDelete() {
      components.forEach((c) => c.onDelete());
    },
  };
}
