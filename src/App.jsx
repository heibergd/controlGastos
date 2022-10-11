import { useState, useEffect } from 'react'

// Importacion de Componentes
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';

// Importacion de las imagenes
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg';



function App() {
  // Definimos el useState para los datos del formulario que vienend del modal
  const [gastos, setGastos] = useState([])
  
  // Definimos el useState, para que el componente este disponible en todos los demas componentes
  const [presupuesto, setPresupuesto]= useState(0)
  // Definimos un state para validar si es un presupuesto valido
  const[isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  // Definimos el state para la ventana modal
  const [modal, setModal] = useState(false)
  
  // Definimos un state para la animacion de la ventana modal
  const [animarModal, setAnimarModal] = useState(false)

  // Definimos un state para la edicion de los gasto
  const [gastoEditar, setGastoEditar] = useState({})

  // Utilizamos el useEffect para registrar los cambios en gastoEditar
  useEffect(()=>{
    if(Object.keys(gastoEditar).length >0){
      setModal(true)
      //Definimos el tiempo para la animacion del modal
      setTimeout(() => {
        //console.log('animando....')
        setAnimarModal(true)
      }, 500);
        // console.log('Gasto Editar tiene contenido')
      }
  }, [gastoEditar])


  // Definimos la funcion para agregar un nuevo gasto
  const handleNuevoGasto= ()=>{
    //console.log('click para agregar nuevo gasto')
    setModal(true)
    setGastoEditar({})

    //Definimos el tiempo para la animacion del modal
    setTimeout(() => {
      //console.log('animando....')
      setAnimarModal(true)
    }, 500);
  }

  // Funcion para guardar los datos del formulario de gastos
  const guardarGasto = gasto =>{
    // console.log(gasto)
    if(gasto.id){
      // Editar
      const gastoActualizado = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizado)
    }else{
      //Nuevo Gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])

    }
   
    // Para cerrar el modal
    setModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  // Eliminar gatos, trabajamos con el id del gasto
  const eliminarGasto = id =>{
    //console.log('Eliminando ', id)
    const gastoActualizado = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastoActualizado)
  }

  

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto ={isValidPresupuesto}
        setIsValidPresupuesto ={setIsValidPresupuesto}
      />
      {isValidPresupuesto &&(
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal 
                  setModal={setModal} 
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                  gastoEditar={gastoEditar}
                />}
      
    </div>
  )
}

export default App
