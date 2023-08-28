import { ADD_LESSON, DELETE_LESSON } from "./actionTypes";

export default function appReducer(state: State, action: Action) {
  let week;
  let weekDay;
  switch (action.acType) {
    case ADD_LESSON:
      week = { ...state.week };
      weekDay = [...week[action.payload.day]];
      weekDay.push(action.payload.lesson);
      week[action.payload.day] = weekDay;
      return { ...state, week: { ...week } };
    case DELETE_LESSON:
      week = { ...state.week };
      weekDay = [...week[action.payload.day]].filter(
        (_, index) => index !== action.payload.index
      );
      week[action.payload.day] = weekDay;
      return { ...state, week: { ...week } };
    default:
      return state;
  }
}
