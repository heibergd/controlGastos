import { useState } from 'react'

// Importacion de Componentes
import Header from './components/Header'
import Modal from './components/Modal';

// Importacion de las imagenes
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg';



function App() {

  // Definimos el useState, para que el componente este disponible en todos los demas componentes
  const [presupuesto, setPresupuesto]= useState(0)
  // Definimos un state para validar si es un presupuesto valido
  const[isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  // Definimos el state para la ventana modal
  const [modal, setModal] = useState(false)
  
  // Definimos un state para la animacion de la ventana modal
  const [animarModal, setAnimarModal] = useState(false)

  // Definimos la funcion para agregar un nuevo gasto
  const handleNuevoGasto= ()=>{
    //console.log('click para agregar nuevo gasto')
    setModal(true)

    //Definimos el tiempo para la animacion del modal
    setTimeout(() => {
      //console.log('animando....')
      setAnimarModal(true)
    }, 500);
  }

  

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto ={isValidPresupuesto}
        setIsValidPresupuesto ={setIsValidPresupuesto}
      />
      {isValidPresupuesto &&(
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt='icono nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal 
                  setModal={setModal} 
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                />}
      
    </div>
  )
}

export default App
