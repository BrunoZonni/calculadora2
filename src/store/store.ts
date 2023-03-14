import { configureStore } from "@reduxjs/toolkit";
import CalculadoraSlice from "./calculadoraSlice";

export const store = configureStore({
  reducer: {
    calculadora: CalculadoraSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
