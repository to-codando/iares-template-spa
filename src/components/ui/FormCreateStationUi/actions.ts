import type { TPubsub, TState } from "iares";
import type { Actions, Callback, Props, State, Subscriber } from "./types";

export const createActions = (state: TState<State>, props: Props): Actions => {
  const subscribe = () => {
    // props.eventDrive.on(props.eventName, props.toggle)
  };

  const clearForm = (event: MouseEvent) => {
    const button = event.target as HTMLElement;
    button.closest("form-create-station-ui")?.classList.remove("show");
    state.setState({ value: "", show: false });
  };

  const showForm = (element: HTMLElement) => {
    element.classList.add("show");
  };

  const saveForm = (event: MouseEvent, callback?: Callback) => {
    callback?.();
    clearForm(event);
  };

  return {
    subscribe,
    clearForm,
    showForm,
    saveForm,
  };
};
