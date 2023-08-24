import appReducer from "./reducerNote";

class StoreNote {
  private state: State;

  private reducer: Reducer;

  private subscrubers: Set<Subscriber>;

  constructor(initialState: State, reducer: Reducer) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscrubers = new Set();
  }

  subscribe(sub: Subscriber) {
    this.subscrubers?.add(sub);
    return () => {
      this.subscrubers?.delete(sub);
    };
  }

  dispatch(action: Action) {
    const newState = this.reducer(this.state, action);
    this.state = newState;
    this.subscrubers.forEach((sub) => sub(newState));
    localStorage.setItem("storeNote", JSON.stringify(this.state));
  }

  getState() {
    return this.state;
  }
}

const getInitState = () => {
  const initialState = localStorage.getItem("storeNote");
  if (!initialState) {
    return {
      notes: [],
    };
  }
  return JSON.parse(initialState);
};

const storeNote = new StoreNote(getInitState(), appReducer);

export default storeNote;
