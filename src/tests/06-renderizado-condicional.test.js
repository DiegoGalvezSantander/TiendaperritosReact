import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Productos from '../pages/Productos';
import Carrito from '../pages/Carrito';
import { CarritoProvider } from '../context/CarritoContext';
import { SesionProvider } from '../context/SesionContext';

function renderConProviders(component) {
    return render(
        <BrowserRouter>
            <SesionProvider>
                <CarritoProvider>{component}</CarritoProvider>
            </SesionProvider>
        </BrowserRouter>
    );
}

describe('Renderizado condicional - Carrito vacío', () => {
    beforeEach(() => localStorage.clear());

    it('muestra el mensaje "Tu carrito está vacío" cuando no hay productos', () => {
        renderConProviders(<Carrito />);
        expect(screen.getByText(/Tu carrito está vacío/i)).toBeTruthy();
    });

    it('muestra el ícono del carrito vacío', () => {
        renderConProviders(<Carrito />);
        expect(screen.getByText('🛒')).toBeTruthy();
    });

    it('NO muestra el botón "Continuar compra" cuando está vacío', () => {
        renderConProviders(<Carrito />);
        expect(screen.queryByText(/Continuar compra/i)).toBeNull();
    });

    it('muestra el botón "Ir a comprar" cuando está vacío', () => {
        renderConProviders(<Carrito />);
        expect(screen.getByText(/Ir a comprar/i)).toBeTruthy();
    });
});

describe('Renderizado condicional - Productos sin resultados', () => {
    beforeEach(() => localStorage.clear());

    it('muestra el título de productos al inicio', () => {
        renderConProviders(<Productos />);
        expect(screen.getByText(/Todos nuestros productos/i)).toBeTruthy();
    });

    it('muestra mensaje de "No se encontraron productos" con filtro imposible', () => {
        renderConProviders(<Productos />);
        const input = screen.getByPlaceholderText(/Buscar producto/i);
        fireEvent.change(input, { target: { value: 'xyzabc123nadaexiste' } });
        expect(screen.getByText(/No se encontraron productos/i)).toBeTruthy();
    });

    it('NO muestra el mensaje de error al inicio', () => {
        renderConProviders(<Productos />);
        expect(screen.queryByText(/No se encontraron productos/i)).toBeNull();
    });

    it('vuelve a mostrar productos al limpiar la búsqueda', () => {
        renderConProviders(<Productos />);
        const input = screen.getByPlaceholderText(/Buscar producto/i);
        fireEvent.change(input, { target: { value: 'xyzabc123' } });
        fireEvent.change(input, { target: { value: '' } });
        expect(screen.queryByText(/No se encontraron productos/i)).toBeNull();
    });
});

describe('Renderizado condicional - Selector de categorías', () => {
    beforeEach(() => localStorage.clear());

    it('muestra la opción "Todas las categorías" por defecto', () => {
        renderConProviders(<Productos />);
        expect(screen.getByText(/Todas las categorías/i)).toBeTruthy();
    });
});