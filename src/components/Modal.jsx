import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import React from "react";

// Importamos la imagen para  cerrar el modal
import CerrarBtn from "../assets/img/cerrar.svg";
import { formatearFecha } from "../helpers";

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
}) => {
    // state para el mensaje de validacion
    const [mensaje, setMensaje] = useState("");

    // Estado inicial del useState para el nombre
    const [nombre, setNombre] = useState("");
    // Estado inicial del useState para cantidad
    const [cantidad, setCantidad] = useState("");
    // Estado inicial de la categoria
    const [categoria, setCategoria] = useState("");
    const [id, setId] = useState("");
    const [fecha, setFecha] = useState('');

    // Utilizamos el useEffect para cargar los datos del componente
    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
           setNombre(gastoEditar.nombre)
           setCantidad(gastoEditar.cantidad)
           setCategoria(gastoEditar.categoria)
           setId(gastoEditar.id)
           setFecha(gastoEditar.fecha)
        }
        // console.log("Componente listo");
    }, []);

    // Funcion para ocutar el modal
    const ocultarModal = () => {
        //console.log('boton para cerrar modal')
        // Reiniciamos la animacion
        setAnimarModal(false);
        // Pasamos a false la ventana modal para que tarde unos segundos en cerrar
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    // Funcion para el evento del submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Enviando formulario')
        // Validacion de los datos del formulario
        if ([nombre, cantidad, categoria].includes("")) {
            // console.log('Fallo la validacion')
            setMensaje("Todos los campos son obligatorios");
            setTimeout(() => {
                setMensaje("");
            }, 2000);
            return;
        }
        guardarGasto({ nombre, cantidad, categoria, id, fecha });
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="boton para cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form
                // Registro de evento en el formulario
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>{gastoEditar.nombre ? "Editar Gasto": 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Agregar el Gasto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        id="cantidad"
                        placeholder="Agregar la cantidad del gasto: ejemplo  300"
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
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
                <input type="submit" value={gastoEditar.nombre ? "Actualizar": 'Añadir Gasto'} />
            </form>
        </div>
    );
};

export default Modal;
