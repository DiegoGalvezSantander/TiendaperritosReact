import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerProductos } from '../utils/productos';
import ProductoCard from '../components/ProductoCard';

export default function CategoriaDetalle() {
    const { nombre } = useParams();
    const catNombre = decodeURIComponent(nombre);
    const productos = obtenerProductos().filter(p => p.categoria === catNombre);
    return (
        <main className="container py-5">
            <h2 className="text-center mb-4" style={{ color: '#334b36' }}>{catNombre}</h2>
            {productos.length === 0 ? (
                <div className="alert alert-info text-center">No hay productos en esta categoría.</div>
            ) : (
                <div className="row g-4">
                    {productos.map(p => (
                        <div key={p.id} className="col-md-6 col-lg-3"><ProductoCard producto={p} /></div>
                    ))}
                </div>
            )}
            <div className="text-center mt-4"><Link to="/categorias" className="btn btn-outline-secondary">← Volver</Link></div>
        </main>
    );
}