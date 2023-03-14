import { createSlice } from "@reduxjs/toolkit";
import { AllCategoria } from "../components/Formulario";

export interface calculadoraState {
  All: AllCategoria[];
}

const initialState: calculadoraState = {
  All: [{ concepto: "", peso: 0, valor: 0, inpuesto: 0 }],
};

export const CalculadoraSlice = createSlice({
  name: "CalculadoraSlice",
  initialState,
  reducers: {
    AddCategoria: (state, action: AllCategoria) => {
      state.All = { ...state.All, ...action };
    },
  },
});

export const { AddCategoria } = CalculadoraSlice.actions;

export default CalculadoraSlice;
