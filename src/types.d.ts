type Component = {
  render: () => void;
  onRender: () => void;
  onDelete: () => void;
};

interface ComponentProps {
  id: string;
  parentEl: HTMLElement;
}

interface State {
  [key: string]: Record<unknown>;
}

type Subscriber = (state: State) => void;

type Action = {
  acType: string;
  payload?: any;
};

type Reducer = (state: State, action: Action) => State;
