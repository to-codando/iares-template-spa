import type { THandler, TState } from "iares";
import type { Actions, Callback, Props, State, Listener } from "./types";

export const createActions = (
  store: TState<State>,
  { eventDrive }: Props,
): Actions => {
  const subscribe = (eventName: string, handler: THandler) => {
    eventDrive.subscribe(eventName, handler)
  };
  
  const clearForm = () => {
    store.setState({ value: "", show: false });
  };


  const cancel = (event: MouseEvent) => {
    hideForm(event)
    clearForm()
  };

  const showForm = (element: HTMLElement) => {
    element.classList.add("show");
  };

  const hideForm = (event: MouseEvent) => {
    const button = event.target as HTMLElement;
    button.closest("form-create-ui")?.classList.remove("show");
  }

  const saveForm = (event: MouseEvent) => {
    const { value } = store.state
    eventDrive.dispatch("create-charging-station", { value })
    clearForm();
  };

  return {
    subscribe,
    clearForm,
    showForm,
    hideForm,
    saveForm,
    cancel,
  };
};
