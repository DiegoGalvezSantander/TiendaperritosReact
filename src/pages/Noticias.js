import React from 'react';
import { Link } from 'react-router-dom';

export default function Noticias() {
    const noticias = [
        { id: 1, titulo: "5 tips para cuidar el pelaje de tu mascota", descripcion: "Mantener el pelaje brillante y saludable es más fácil de lo que crees.", img: "/IMG/PerroYgato.jpg" },
        { id: 2, titulo: "¿Es recomendable darle Churu a tus gatitos?", descripcion: "Los snacks húmedos como el Churu son una excelente forma de hidratar a tu felino.", img: "/IMG/ProductosGato/SuperRascadorGato.png" }
    ];
    return (
        <main className="container py-5">
            <h2 className="text-center mb-4" style={{ color: '#334b36' }}>📰 Noticias y Consejos</h2>
            <div className="row g-4">
                {noticias.map(n => (
                    <div key={n.id} className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <img src={n.img} className="card-img-top" alt={n.titulo} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#334b36' }}>{n.titulo}</h5>
                                <p className="card-text text-muted">{n.descripcion}</p>
                                <Link to={`/blog/${n.id}`} className="btn btn-outline-success btn-sm">Leer más →</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4"><Link to="/" className="btn btn-success">🏠 Volver</Link></div>
        </main>
    );
}