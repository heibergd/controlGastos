import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    // Creamos el useState para el mensaje
    const [mensaje, setMensaje]=useState('')
    
    // Creamos la funcion para validar que lo que se ingrese en presupuesto sea numero
    const handlePresupuesto = (e)=>{
        e.preventDefault()
        //console.log('Enviando presupuesto')
        //console.log(Number(presupuesto))
        if(!presupuesto || presupuesto<0){
            //console.log('No es un numero')
            setMensaje('No es un presupuesto valido')
            return
        }
        //else {
            //console.log('Si es un numero')
        //}

        //console.log('Si es un presupuesto valido')
        setMensaje('') // para eliminar la alerta
        //console.log(presupuesto)
        // Si el presupuesto es valido cambiamos el State a verdadero
        setIsValidPresupuesto(true)

    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        type="number"
                        className='nuevo-presupuesto'
                        placeholder='Ingresa tu Presupuesto '
                        value={presupuesto}
                        onChange={ (e)=>{setPresupuesto(Number( e.target.value))}}
                        />
                </div>
                <input type="submit" value="Agregar" />
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto