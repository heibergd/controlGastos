import React from 'react'

// Importamos la imagen para  cerrar el modal
import CerrarBtn from '../assets/img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
    // Funcion para ocutar el modal
    const ocultarModal=()=>{
        //console.log('boton para cerrar modal')
        // Reiniciamos la animacion
        setAnimarModal(false)
        // Pasamos a false la ventana modal para que tarde unos segundos en cerrar
        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarBtn} alt="boton para cerrar modal" onClick={ocultarModal} />
            </div>
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input type="text" id='nombre' placeholder='Agregar el Gasto' />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id='cantidad' placeholder='Agregar la cantidad del gasto: ejemplo  300' />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select  id="categoria">
                        <option value="">-- Selecciona una categoria --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripcion">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Agregar Gasto" />
            </form>
        </div>
    )
}

export default Modal