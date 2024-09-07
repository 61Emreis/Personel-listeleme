import { configureStore } from '@reduxjs/toolkit';
import personelReducer from './personnelSlice';

export const store = configureStore({
  reducer: {
    personnel: personelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
