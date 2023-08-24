import { ADD_LESSON } from "./actionTypes";

export function addLessonAction(day: string, lesson: string): Action {
  return { acType: ADD_LESSON, payload: { day, lesson } };
}
