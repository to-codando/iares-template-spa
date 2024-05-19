import type { TGenericObject, THandler, TPubsub } from "iares";

export type Callback = (param?: unknown) => void;

export type Handler = (event: Event) => void;

export type Subscriber = {
  eventName: string;
  handler: THandler;
};

export type Props = {
  inputValue: string;
  emitter: TPubsub;
  event: { eventName: string; handler: Callback };
};

export type State = {
  value: string;
  show: boolean;
};

export type Actions = {
  clearForm: (event: MouseEvent) => void;
  saveForm: (event: MouseEvent, callback?: Callback) => void;
  subscribe: () => void;
  showForm: (element: HTMLElement) => void;
};

export type EventDrive = {
  subscribe: (eventName: string, handler: THandler) => void;
  unsubscribe: (eventName: string, handler: THandler) => void;
  dispatch: <T>(eventName: string, payload: TGenericObject<T>) => void;
};

export type Params = {
  props: Props;
  state: State;
  actions: Actions;
  eventDrive: EventDrive;
};
