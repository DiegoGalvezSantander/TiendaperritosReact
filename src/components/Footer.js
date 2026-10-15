import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="footer-contenido">
                <div className="footer-columna">
                    <h3>🐾 TiendaDeMascotas</h3>
                    <p style={{ color: '#bec6bf' }}>Todo lo que necesitan, en un solo lugar.</p>
                </div>
                <div className="footer-columna">
                    <h3>Comprar</h3>
                    <Link to="/productos">Productos</Link>
                    <Link to="/carrito">Carrito</Link>
                </div>
                <div className="footer-columna">
                    <h3>Información</h3>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
                <div className="footer-columna">
                    <h3>Cuenta</h3>
                    <Link to="/login">Iniciar sesión</Link>
                    <Link to="/registro">Registrarse</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 TiendaDeMascotas. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}