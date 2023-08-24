import { ADD_NOTE } from "./actionTypesNote";

export default function appReducerNote(state: State, action: Action): State {
  switch (action.acType) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload.task] };
    default:
      return state;
  }
}
