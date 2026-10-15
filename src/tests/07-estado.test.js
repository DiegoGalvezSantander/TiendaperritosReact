import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contacto from '../pages/Contacto';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
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

describe('Estado - Formulario Contacto', () => {
    it('actualiza el estado del nombre al escribir', () => {
        renderConProviders(<Contacto />);
        const input = document.getElementById('nombre');
        fireEvent.change(input, { target: { value: 'Juan Pérez' } });
        expect(input.value).toBe('Juan Pérez');
    });

    it('actualiza el email al escribir', () => {
        renderConProviders(<Contacto />);
        const input = document.getElementById('email');
        fireEvent.change(input, { target: { value: 'juan@duoc.cl' } });
        expect(input.value).toBe('juan@duoc.cl');
    });

    it('actualiza el comentario al escribir', () => {
        renderConProviders(<Contacto />);
        const input = document.getElementById('comentario');
        fireEvent.change(input, { target: { value: 'Hola, tengo una consulta' } });
        expect(input.value).toBe('Hola, tengo una consulta');
    });

    it('actualiza múltiples campos independientemente', () => {
        renderConProviders(<Contacto />);
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        fireEvent.change(nombre, { target: { value: 'Ana' } });
        fireEvent.change(email, { target: { value: 'ana@duoc.cl' } });
        expect(nombre.value).toBe('Ana');
        expect(email.value).toBe('ana@duoc.cl');
    });

    it('limpia el comentario después de escribir vacío', () => {
        renderConProviders(<Contacto />);
        const input = document.getElementById('comentario');
        fireEvent.change(input, { target: { value: 'texto' } });
        fireEvent.change(input, { target: { value: '' } });
        expect(input.value).toBe('');
    });
});

describe('Estado - Login', () => {
    it('actualiza el email al escribir', () => {
        renderConProviders(<Login />);
        const input = screen.getByPlaceholderText(/admin@duoc.cl/i);
        fireEvent.change(input, { target: { value: 'test@duoc.cl' } });
        expect(input.value).toBe('test@duoc.cl');
    });

    it('actualiza la contraseña al escribir', () => {
        renderConProviders(<Login />);
        const input = screen.getByPlaceholderText('••••••••');
        fireEvent.change(input, { target: { value: '1234' } });
        expect(input.value).toBe('1234');
    });

    it('permite escribir en ambos campos', () => {
        renderConProviders(<Login />);
        const email = screen.getByPlaceholderText(/admin@duoc.cl/i);
        const pass = screen.getByPlaceholderText('••••••••');
        fireEvent.change(email, { target: { value: 'a@duoc.cl' } });
        fireEvent.change(pass, { target: { value: 'abcd' } });
        expect(email.value).toBe('a@duoc.cl');
        expect(pass.value).toBe('abcd');
    });
});

describe('Estado - Registro', () => {
    it('actualiza el nombre', () => {
        renderConProviders(<Registro />);
        const input = document.getElementById('nombre');
        fireEvent.change(input, { target: { value: 'Pedro' } });
        expect(input.value).toBe('Pedro');
    });

    it('actualiza el email', () => {
        renderConProviders(<Registro />);
        const input = document.getElementById('email');
        fireEvent.change(input, { target: { value: 'pedro@duoc.cl' } });
        expect(input.value).toBe('pedro@duoc.cl');
    });

    it('actualiza el RUT', () => {
        renderConProviders(<Registro />);
        const input = document.getElementById('rut');
        fireEvent.change(input, { target: { value: '111111111' } });
        expect(input.value).toBe('111111111');
    });

    it('actualiza la contraseña', () => {
        renderConProviders(<Registro />);
        const input = document.getElementById('password');
        fireEvent.change(input, { target: { value: 'abcd' } });
        expect(input.value).toBe('abcd');
    });

    it('actualiza múltiples campos', () => {
        renderConProviders(<Registro />);
        fireEvent.change(document.getElementById('nombre'), { target: { value: 'Ana' } });
        fireEvent.change(document.getElementById('apellidos'), { target: { value: 'López' } });
        fireEvent.change(document.getElementById('email'), { target: { value: 'ana@duoc.cl' } });
        expect(document.getElementById('nombre').value).toBe('Ana');
        expect(document.getElementById('apellidos').value).toBe('López');
        expect(document.getElementById('email').value).toBe('ana@duoc.cl');
    });

    it('actualiza la dirección', () => {
        renderConProviders(<Registro />);
        const input = document.getElementById('direccion');
        fireEvent.change(input, { target: { value: 'Av. Siempre Viva 123' } });
        expect(input.value).toBe('Av. Siempre Viva 123');
    });
});