import React from 'react'

// Importammos el compomente Nuevo Presupuesto
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {
  return (
    <header>

        <h1>Planificador de Gastos</h1>
        {/* Validamos que el presupuesto sea valido para abri el componente correspondiente */}
        {isValidPresupuesto ? (
            <ControlPresupuesto
                gastos = {gastos}
                presupuesto={presupuesto}
            />
        ): (
            <NuevoPresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                setIsValidPresupuesto ={setIsValidPresupuesto}
            />
        ) }
        
    </header>
  )
}

export default Header