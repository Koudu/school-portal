import { ADD_NOTE } from "./actionTypesNote";

export function addNoteAction(task: string): Action {
  return { acType: ADD_NOTE, payload: { task } };
}
