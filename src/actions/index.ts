import { ActionTypes } from "./actionTypes";

export const firstAction = () =>
  ({
    type: ActionTypes.FIRST_ACTION
  } as const);

export type Actions = ReturnType<typeof firstAction>;
