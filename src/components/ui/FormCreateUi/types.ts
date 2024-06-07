import type { TGenericObject, THandler } from "iares";

export type State = {
  value: string;
  show: boolean;
};

export type Callback = (param?: unknown) => void;

export type Handler = (event: Event) => void;

export type Subscriber = {
  eventName: string;
  handler: THandler;
};

export type SubscriberParams = { eventDrive: EventDrive; eventName: string };

export type Actions = {
  cancel: (event: MouseEvent) => void;
  clearForm: () => void;
  hideForm: (event: MouseEvent) => void;
  saveForm: (event: MouseEvent) => void;
  subscribe: (eventName: string, handler: THandler) => void;
  showForm: (element: HTMLElement) => void;
};

export type EventDrive = {
  subscribe: (eventName: string, handler: THandler) => void;
  unsubscribe: (eventName: string, handler: THandler) => void;
  dispatch: <T = void>(eventName: string, payload: TGenericObject<T>) => void;
};

export type Dispatch<T = void> = {
  eventName: string;
  payload: T;
};

export type Listener = {
  eventName: string;
  handler: THandler;
}

export type Props = {
  inputValue: string;
  eventDrive: EventDrive;
  eventListeners: Listener[];
};

export type Params = {
  props: Props;
  state: State;
  actions: Actions;
};
