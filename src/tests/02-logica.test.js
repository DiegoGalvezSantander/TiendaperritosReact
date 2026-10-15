import {
    calcularTotal,
    filtrarProductos,
    obtenerCriticos,
    obtenerOfertas,
    validarPassword,
    validarNombre
} from '../utils/productos';

import {
    agregarAlCarrito,
    cambiarCantidadEnCarrito,
    eliminarDelCarrito
} from '../utils/carrito';

describe('Lógica de negocio - Carrito (utils reales)', () => {
    it('calcula el total del carrito correctamente', () => {
        const carrito = [
            { precio: 1000, cantidad: 2 },
            { precio: 500, cantidad: 3 }
        ];
        expect(calcularTotal(carrito)).toBe(3500);
    });

    it('carrito vacío tiene total 0', () => {
        expect(calcularTotal([])).toBe(0);
    });

    it('calcula total con un solo producto', () => {
        expect(calcularTotal([{ precio: 9990, cantidad: 1 }])).toBe(9990);
    });

    it('calcula total con cantidad 0', () => {
        expect(calcularTotal([{ precio: 1000, cantidad: 0 }])).toBe(0);
    });
});

describe('Lógica de negocio - Funciones puras del carrito', () => {
    it('agregarAlCarrito agrega producto nuevo', () => {
        const resultado = agregarAlCarrito([], { id: 1, precio: 100 });
        expect(resultado.length).toBe(1);
        expect(resultado[0].cantidad).toBe(1);
    });

    it('agregarAlCarrito incrementa cantidad si ya existe', () => {
        const resultado = agregarAlCarrito(
            [{ id: 1, precio: 100, cantidad: 1 }],
            { id: 1, precio: 100 }
        );
        expect(resultado[0].cantidad).toBe(2);
        expect(resultado.length).toBe(1);
    });

    it('cambiarCantidadEnCarrito suma delta positivo', () => {
        const resultado = cambiarCantidadEnCarrito(
            [{ id: 1, cantidad: 2 }], 1, 3
        );
        expect(resultado[0].cantidad).toBe(5);
    });

    it('cambiarCantidadEnCarrito elimina producto si queda en 0 o menos', () => {
        const resultado = cambiarCantidadEnCarrito(
            [{ id: 1, cantidad: 1 }], 1, -1
        );
        expect(resultado.length).toBe(0);
    });

    it('eliminarDelCarrito remueve por id', () => {
        const resultado = eliminarDelCarrito(
            [{ id: 1 }, { id: 2 }, { id: 3 }], 2
        );
        expect(resultado.length).toBe(2);
        expect(resultado.find(p => p.id === 2)).toBeUndefined();
    });
});

describe('Lógica de negocio - Stock (utils reales)', () => {
    it('detecta productos con stock crítico', () => {
        const productos = [
            { stock: 5, stockCritico: 3 },
            { stock: 2, stockCritico: 5 }
        ];
        expect(obtenerCriticos(productos).length).toBe(1);
    });

    it('detecta múltiples productos críticos', () => {
        const productos = [
            { stock: 1, stockCritico: 5 },
            { stock: 2, stockCritico: 5 },
            { stock: 20, stockCritico: 5 }
        ];
        expect(obtenerCriticos(productos).length).toBe(2);
    });

    it('ningún producto crítico cuando todo está ok', () => {
        const productos = [
            { stock: 50, stockCritico: 5 },
            { stock: 30, stockCritico: 10 }
        ];
        expect(obtenerCriticos(productos).length).toBe(0);
    });

    it('stock igual al crítico se considera crítico', () => {
        expect(obtenerCriticos([{ stock: 5, stockCritico: 5 }]).length).toBe(1);
    });
});

describe('Lógica de negocio - Filtros (utils reales)', () => {
    const productos = [
        { nombre: 'Rascador Premium', categoria: 'Juguetes', precio: 1000, enOferta: true },
        { nombre: 'Cerdito Oink', categoria: 'Juguetes', precio: 3000, enOferta: false },
        { nombre: 'Arnés Gato', categoria: 'Accesorios', precio: 9990, enOferta: true }
    ];

    it('filtra por nombre (case-insensitive)', () => {
        expect(filtrarProductos(productos, { busqueda: 'RASCADOR' }).length).toBe(1);
    });

    it('filtra por categoría', () => {
        expect(filtrarProductos(productos, { categoria: 'Juguetes' }).length).toBe(2);
    });

    it('filtra por nombre + categoría combinados', () => {
        // Solo "Rascador Premium" contiene 'a' Y es de 'Juguetes'
        expect(filtrarProductos(productos, { busqueda: 'a', categoria: 'Juguetes' }).length).toBe(1);
    });

    it('sin filtros retorna todo', () => {
        expect(filtrarProductos(productos).length).toBe(3);
    });

    it('filtro sin coincidencias retorna vacío', () => {
        expect(filtrarProductos(productos, { busqueda: 'zzzz' }).length).toBe(0);
    });

    it('obtenerOfertas retorna solo productos en oferta', () => {
        expect(obtenerOfertas(productos).length).toBe(2);
    });
});

describe('Lógica de negocio - ValidarPassword', () => {
    it('rechaza contraseña corta (< 4)', () => {
        expect(validarPassword('Ab1').valido).toBe(false);
    });

    it('rechaza contraseña larga (> 10)', () => {
        expect(validarPassword('Abcdefghij1').valido).toBe(false);
    });

    it('rechaza contraseña sin mayúscula', () => {
        expect(validarPassword('abcd1').valido).toBe(false);
    });

    it('rechaza contraseña sin número', () => {
        expect(validarPassword('Abcde').valido).toBe(false);
    });

    it('acepta contraseña válida', () => {
        expect(validarPassword('Abcd1').valido).toBe(true);
    });
});

describe('Lógica de negocio - ValidarNombre', () => {
    it('acepta nombre válido', () => {
        expect(validarNombre('Juan')).toBe(true);
    });

    it('rechaza nombre vacío', () => {
        expect(validarNombre('')).toBe(false);
    });

    it('rechaza nombre excede el máximo', () => {
        expect(validarNombre('a'.repeat(51), 50)).toBe(false);
    });
});