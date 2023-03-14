import * as React from 'react'

// css
import './css/Calculadora.css';

// components
import { Presupuestos } from './Presupuestos';
import { Formulario } from './Formulario';

export const Calculadora = () => {
  return (
    <div className='calculadoraContenedor'>
      <h1 className='calculadoraTitulo'>Calculadora</h1>


      <hr style={{ marginTop: '10px', border: '.5px solid #cccccc ' }} />

      <Formulario />
      <Presupuestos />

    </div>
  )
}
