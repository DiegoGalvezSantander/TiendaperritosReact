import React, { useState } from 'react';
import { obtenerProductos, categorias, filtrarProductos } from '../utils/productos';
import ProductoCard from '../components/ProductoCard';

export default function Productos() {
    const [busqueda, setBusqueda] = useState('');
    const [catFiltro, setCatFiltro] = useState('');
    const productos = obtenerProductos();

    const filtrados = filtrarProductos(productos, {
        busqueda,
        categoria: catFiltro
    });

    return (
        <main className="container py-4">
            <h2 className="text-center mb-4" style={{ color: '#334b36' }}>
                🐾 Todos nuestros productos
            </h2>
            <div className="row mb-4 g-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Buscar producto..."
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={catFiltro}
                        onChange={e => setCatFiltro(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {categorias.map(c => (
                            <option key={c.id} value={c.nombre}>{c.nombre}</option>
                        ))}
                    </select>
                </div>
            </div>
            {filtrados.length === 0 ? (
                <div className="alert alert-info text-center">
                    No se encontraron productos.
                </div>
            ) : (
                <div className="row g-4">
                    {filtrados.map(p => (
                        <div key={p.id} className="col-md-6 col-lg-3">
                            <ProductoCard producto={p} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}