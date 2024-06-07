import { TGenericObject } from "iares"
import { Actions, EventDrive } from "./types"

export const createActions = (emitter: EventDrive): Actions => {
  const emit = <T = void>(eventName: string, payload: TGenericObject<T>) => {
    emitter?.dispatch?.(eventName, payload)
  }

  return {
    emit
  }
}
