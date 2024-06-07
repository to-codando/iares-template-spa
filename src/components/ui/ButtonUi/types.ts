import { TGenericObject, THandler } from "iares";

export type EventDrive = {
  subscribe: (eventName: string, handler: THandler) => void;
  unsubscribe: (eventName: string, handler: THandler) => void;
  dispatch: <T = void>(eventName: string, payload: TGenericObject<T>) => void;
};

export type Actions = {
  emit: <T = void>(eventName: string, payload: TGenericObject<T>) => void
}


export type Handler = (event: MouseEvent) => void;

export type Props = {
  icon: string;
  label: string;
  emitter: EventDrive;
  eventName: string;
  payload?: unknown;
};

export type Params = {
  props: Props;
  actions: Actions 
}
