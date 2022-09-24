import type { store } from './index';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface AsyncThunkConfig<T> {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: T;
}
