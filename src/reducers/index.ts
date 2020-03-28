import { combineReducers, Action } from "redux";
import { Reducer } from "react";
import isLoading from "./isLoading";

const rootReducer = combineReducers({
  isLoading
});

export default rootReducer;

type StateType<T> = T extends Reducer<infer S, Action> ? S : never;

export type RootState = StateType<typeof rootReducer>;
