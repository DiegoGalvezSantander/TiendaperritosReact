import React, { useState } from 'react';
import { validarEmail } from '../utils/productos';

export default function Contacto() {
    const [form, setForm] = useState({ nombre: '', email: '', comentario: '' });
    const [error, setError] = useState('');
    const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!form.nombre || form.nombre.length > 100) { setError('❌ Nombre (máx 100).'); return; }
        if (!validarEmail(form.email)) { setError('❌ Email inválido.'); return; }
        if (!form.comentario || form.comentario.length > 500) { setError('❌ Comentario (máx 500).'); return; }
        alert('✅ Mensaje enviado');
        setForm({ nombre: '', email: '', comentario: '' });
    };
    return (
        <main className="container py-5">
            <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '800px' }}>
                <h2 className="text-center mb-4" style={{ color: '#334b36' }}>📩 Contáctanos</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="row g-4">
                    <div className="col-md-5">
                        <h5>Información</h5>
                        <p><strong>📞 Teléfono:</strong> +569 9999 9999</p>
                        <p><strong>📧 Email:</strong> TiendaMascotas@gmail.com</p>
                        <p><strong>💬 WhatsApp:</strong> +569 9191 1919</p>
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3"><label className="form-label fw-bold">Nombre *</label><input id="nombre" className="form-control" value={form.nombre} onChange={handleChange} /></div>
                            <div className="mb-3"><label className="form-label fw-bold">Email *</label><input id="email" type="email" className="form-control" value={form.email} onChange={handleChange} /></div>
                            <div className="mb-3"><label className="form-label fw-bold">Comentario *</label><textarea id="comentario" rows="4" className="form-control" value={form.comentario} onChange={handleChange}></textarea></div>
                            <button type="submit" className="btn btn-success w-100">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}