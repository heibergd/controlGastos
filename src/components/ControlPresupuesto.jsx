import { useState, useEffect} from 'react'

const ControlPresupuesto = ({gastos, presupuesto}) => {

    // El estado para lo que esta diponible en el presupuesto
    const [ disponible, setDisponible ] = useState(0)

    // Estado para lo que se va gastando
    const [ gastado, setGastado] = useState(0)

    // Usamos en useEffect para ver los cambios en gastos
    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 )
        const totalDisponible = presupuesto - totalGastado;
        //console.log(totalDisponible)
        //console.log(totalGastado)
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])
    

    // Funcion para darle formato de moneda al presupuesto
    const formatearCantidad =(cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto