import type { TGenericObject, THandler } from "iares";

export type EventDrive = {
  subscribe: (eventName: string, handler: THandler) => void;
  unsubscribe: (eventName: string, handler: THandler) => void;
  dispatch: <T = void>(eventName: string, payload: TGenericObject<T>) => void;
};

type Handler = (event: MouseEvent) => void;

export type Actions = {
  clickButton: (handler: Handler) => void;
};

type Props = {
  eventDrive: EventDrive;
};
export type Params = {
  props: Props;
};
