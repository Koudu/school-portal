import appReducer from "./reducer";

class Store {
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
    localStorage.setItem("store", JSON.stringify(this.state));
  }

  getState() {
    return this.state;
  }
}

const getInitState = () => {
  const initialState = localStorage.getItem("store");
  if (!initialState) {
    return {
      week: {
        Mon: [],
        Tue: [],
        Wen: [],
        Thu: [],
        Fri: [],
      },
      lesson: {
        English: [],
        Biology: [],
        Geography: [],
        ComputerScience: [],
        History: [],
        Literature: [],
        Algebra: [],
        Geometry: [],
        Music: [],
        OBZH: [],
        SocialStudies: [],
        Russian: [],
        Physics: [],
        PhysicalCulture: [],
        French: [],
        Chemistry: [],
      },
    };
  }
  return JSON.parse(initialState);
};

const store = new Store(getInitState(), appReducer);

export default store;
