import React from 'react';
import { Link } from 'react-router-dom';

export default function Nosotros() {
    return (
        <main className="container py-5">
            <div className="card p-5 mx-auto shadow-sm" style={{ maxWidth: '800px' }}>
                <h2 className="text-center mb-4">🐾 Sobre Nosotros</h2>
                <p><strong>Somos un equipo apasionado por el bienestar de las mascotas</strong>, dedicado a ofrecer productos de calidad y un servicio excepcional.</p>
                <p><strong>Fundada en 2020</strong>, TiendaDeMascotas se ha convertido en la referencia en productos y servicios para el cuidado de tus mascotas.</p>
                <p>Creemos que las mascotas son parte de la familia, por eso trabajamos con marcas reconocidas.</p>
                <div className="text-center mt-4"><Link to="/" className="btn btn-success">🏠 Volver al Inicio</Link></div>
            </div>
        </main>
    );
}