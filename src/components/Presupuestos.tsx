import React from 'react'

// css
import './css/Presupuestos.css';

export const Presupuestos = () => {
  return (
    <div className='animate__animated animate__bounceInUp' >
      <div className='data'>
        <table className='presupuestos__table'>
          <thead className='presupuestostHead'>
            <tr>
              <th className='center'>concepto</th>
              <th>Valor (US$)</th>
              <th>peso (Kg)</th>
              <th>inpuestos</th>
            </tr>
          </thead>
          <tbody className='presupuestostBody'>
            <tr>
              <td className='center'>cagador p/notebook</td>
              <td>300</td>
              <td>3</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td className='center'>cagador p/notebook</td>
              <td>300</td>
              <td>3</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td className='center'>cagador p/notebook</td>
              <td>300</td>
              <td>3</td>
              <td>150.00</td>
            </tr>
          </tbody>
          <hr color='black' style={{ height: '2px', marginTop: '5px', marginBottom: '10px' }} />
          <tfoot className='presupuestostFoot'>
            <tr>
              <th></th>
              <th></th>
              <th>inpuestos</th>
              <th>350.2 US$</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Seguro internacional 1%</th>
              <th>350.2 US$</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>flete</th>
              <th>350.2 US$</th>
            </tr>
          </tfoot>
        </table>
      </div>

      <h5 className='textPEsoTotal'>Peso a cobrar: <span>8 Kg</span></h5>
      <p className='textExtra'>( Se utiliza el mayor de estos valores para el calculo del Envio )</p>
      <h5 className='textDineroTotal'>Total a cobrar: 230.00 US$</h5>

    </div>

  )
}
