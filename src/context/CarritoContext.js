import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    agregarAlCarrito,
    cambiarCantidadEnCarrito,
    eliminarDelCarrito
} from '../utils/carrito';

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregar = (producto) => setCarrito(prev => agregarAlCarrito(prev, producto));

    const eliminar = (id) => setCarrito(prev => eliminarDelCarrito(prev, id));

    const cambiarCantidad = (id, delta) =>
        setCarrito(prev => cambiarCantidadEnCarrito(prev, id, delta));

    const vaciar = () => setCarrito([]);

    const total = carrito.reduce((s, p) => s + p.precio * p.cantidad, 0);

    return (
        <CarritoContext.Provider value={{ carrito, agregar, eliminar, cambiarCantidad, vaciar, total }}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarrito = () => useContext(CarritoContext);