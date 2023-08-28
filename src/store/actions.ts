import { ADD_LESSON, DELETE_LESSON } from "./actionTypes";

export function addLessonAction(day: string, lesson: string): Action {
  return { acType: ADD_LESSON, payload: { day, lesson } };
}

export function deleteLessonAction(day: string, index: number): Action {
  return { acType: DELETE_LESSON, payload: { day, index } };
}
