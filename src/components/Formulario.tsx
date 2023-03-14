import * as React from 'react'
import { data } from './Interfaces/dataInterface';
import Select from 'react-select';

const Origen: data[] = [
    { value: 'Miami', label: 'Miami' },
    { value: 'China', label: 'China' },
]

const pais: data[] = [
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Republica Dominicana', label: 'Republica Dominicana' }
]

const categoria: data[] = [
    { value: 'notebook', label: 'notebook', porcentaje: 50 },
    { value: 'Acc. buceo', label: 'Acc. buceo', porcentaje: 30 },
    { value: 'Acc. de camara fotografíca', label: 'Acc. de camara fotografíca', porcentaje: 20 },
    { value: 'Acc. de computación', label: 'Acc. de computación', porcentaje: 60 },
    { value: 'Acc. de fotografía', label: 'Acc. de computación', porcentaje: 70 },
]

export interface AllCategoria {
    concepto: string;
    valor: number;
    peso: number;
    inpuesto?: number;
}

interface Data {
    USD: number;
    peso: number;
}

export const Formulario = () => {
    const [paisSelect, setPaisSelect] = React.useState('');
    const [allCategoria, setAllCategoria] = React.useState<AllCategoria>({ concepto: '', valor: 0, peso: 0 });
    const [valores, SetValores] = React.useState<Data>({ peso: 0, USD: 0 });


    return (
        <form className='calculadoraForm'>
            <Select
                options={pais}
                placeholder='Select::'
                className="pais"
                onChange={({ value }: data) => setPaisSelect(value)}
            />

            {
                !!paisSelect &&
                <>
                    <div className='calculadoraDatos animate__animated animate__bounceInUp'>
                        <input
                            type="number"
                            placeholder='Ingresa el valor en USD'
                            onChange={(e) => SetValores({
                                ...valores,
                                USD: parseInt(e.target.value),
                            })}
                        />
                        <input
                            type="number"
                            placeholder='Ingresa el peso en KG de importación'
                            onChange={(e) => SetValores({
                                ...valores,
                                peso: parseInt(e.target.value)
                            })}
                        />
                        <Select
                            options={Origen}
                            placeholder=':: Origen ::'
                        />
                    </div>

                    <div>
                        <Select
                            options={categoria}
                            placeholder=':: Categoria de producto ::'
                            className='appear animate__animated animate__bounceInUp'
                            onChange={({ value, porcentaje }: data) => setAllCategoria({
                                concepto: value,
                                valor: valores.USD,
                                peso: valores.peso,
                                inpuesto: valores.USD * (porcentaje! / 100)
                            })}
                        />
                    </div>

                    <div className='CalculadoracontentBtn animate__animated animate__bounceInUp' >
                        <button
                            className='btn'
                            type='submit'
                            onClick={() => { }}
                        >Agregar Item</button>
                        <button
                            className='btn'>Reiniciar</button>
                    </div>
                </>
            }
        </form>
    )
}
