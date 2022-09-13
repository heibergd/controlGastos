import { useState } from 'react'

// Importacion de Componentes
import Header from './components/Header'



function App() {

  // Definimos el useState, para que el componente este disponible en todos los demas componentes
  const [presupuesto, setPresupuesto]= useState(0)
  // Definimos un state para validar si es un presupuesto valido
  const[isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto ={isValidPresupuesto}
        setIsValidPresupuesto ={setIsValidPresupuesto}
      />
    </div>
  )
}

export default App
