import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductoCard from '../components/ProductoCard';
import Footer from '../components/Footer';
import { CarritoProvider } from '../context/CarritoContext';
import { SesionProvider } from '../context/SesionContext';

const producto = {
    id: 1,
    nombre: 'Rascador Premium',
    precio: 39990,
    imagen: 'IMG/ProductosGato/SuperRascadorGato.png'
};

function renderConProviders(component) {
    return render(
        <BrowserRouter>
            <SesionProvider>
                <CarritoProvider>{component}</CarritoProvider>
            </SesionProvider>
        </BrowserRouter>
    );
}

function buscarPrecio(numero) {
    return screen.getByText((content, element) => {
        if (element.tagName !== 'P') return false;
        const limpio = element.textContent.replace(/[^0-9]/g, '');
        return limpio.includes(String(numero));
    });
}

describe('Renderizado - ProductoCard', () => {
    it('renderiza el nombre del producto', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        expect(screen.getByText('Rascador Premium')).toBeTruthy();
    });

    it('renderiza el precio formateado correctamente', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        expect(buscarPrecio(39990)).toBeTruthy();
    });

    it('renderiza el botón de añadir al carrito', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        expect(screen.getByText(/Añadir al carrito/i)).toBeTruthy();
    });

    it('renderiza la imagen con el alt correcto', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        const img = screen.getByAltText('Rascador Premium');
        expect(img).toBeTruthy();
    });
});

describe('Renderizado - Footer', () => {
    it('renderiza el nombre de la tienda', () => {
        renderConProviders(<Footer />);
        expect(screen.getAllByText(/TiendaDeMascotas/i).length).toBeGreaterThan(0);
    });

    it('renderiza el link de Productos', () => {
        renderConProviders(<Footer />);
        expect(screen.getByText('Productos')).toBeTruthy();
    });

    it('renderiza el link de Carrito', () => {
        renderConProviders(<Footer />);
        expect(screen.getByText('Carrito')).toBeTruthy();
    });

    it('renderiza el copyright', () => {
        renderConProviders(<Footer />);
        expect(screen.getByText(/Todos los derechos reservados/i)).toBeTruthy();
    });
});

describe('Props - ProductoCard con props distintas', () => {
    it('muestra el nombre del prop', () => {
        const otroProducto = { id: 99, nombre: 'Producto Único', precio: 1234, imagen: 'x.png' };
        renderConProviders(<ProductoCard producto={otroProducto} />);
        expect(screen.getByText('Producto Único')).toBeTruthy();
    });

    it('formatea correctamente el precio de otro producto', () => {
        const otroProducto = { id: 50, nombre: 'Cerdito', precio: 3990, imagen: 'x.png' };
        renderConProviders(<ProductoCard producto={otroProducto} />);
        expect(buscarPrecio(3990)).toBeTruthy();
    });

    it('renderiza el botón para distintos productos', () => {
        const otroProducto = { id: 51, nombre: 'Arnés', precio: 9990, imagen: 'x.png' };
        renderConProviders(<ProductoCard producto={otroProducto} />);
        expect(screen.getByText(/Añadir al carrito/i)).toBeTruthy();
    });
});

describe('Eventos - Click en agregar al carrito', () => {
    it('no lanza error al hacer click en añadir', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        const btn = screen.getByText(/Añadir al carrito/i);
        expect(() => fireEvent.click(btn)).not.toThrow();
    });

    it('el botón de añadir sigue existiendo tras el click', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        const btn = screen.getByText(/Añadir al carrito/i);
        fireEvent.click(btn);
        expect(btn).toBeTruthy();
    });

    it('se puede hacer click múltiples veces sin errores', () => {
        renderConProviders(<ProductoCard producto={producto} />);
        const btn = screen.getByText(/Añadir al carrito/i);
        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);
        expect(btn).toBeTruthy();
    });
});
