import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog1() {
    return (
        <main className="container py-5">
            <article className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '800px' }}>
                <span className="text-muted">📅 09 de Septiembre, 2026</span>
                <h1 className="mt-2" style={{ color: '#334b36' }}>5 tips para cuidar el pelaje de tu mascota</h1>
                <img src="/IMG/PerroYgato.jpg" alt="Mascota con pelaje brillante" className="img-fluid rounded my-3" />

                <p>El pelaje de nuestras mascotas no solo es su carta de presentación, sino también un reflejo de su salud general. Un pelo brillante y suave indica que nuestro compañero está bien alimentado, libre de estrés y con una buena higiene.</p>

                <h3 style={{ color: '#334b36' }}>🪥 1. Cepillado diario</h3>
                <p>El cepillado elimina el pelo muerto, distribuye los aceites naturales de la piel y previene la formación de nudos. Usa un cepillo adecuado a su tipo de manto.</p>

                <h3 style={{ color: '#334b36' }}>🛁 2. Baños con productos específicos</h3>
                <p>No uses champú humano. El pH de la piel de perros y gatos es diferente. Utiliza productos veterinarios y baña cada 3 o 4 semanas.</p>

                <h3 style={{ color: '#334b36' }}>🍣 3. Alimentación rica en Omega 3 y 6</h3>
                <p>Los ácidos grasos esenciales ayudan a mantener la piel hidratada y el pelo fuerte.</p>

                <h3 style={{ color: '#334b36' }}>💧 4. Hidratación constante</h3>
                <p>Agua fresca siempre disponible. Una buena hidratación mejora la elasticidad de la piel y la textura del pelaje.</p>

                <h3 style={{ color: '#334b36' }}>🏥 5. Visitas regulares al veterinario</h3>
                <p>Problemas de tiroides, alergias o parásitos pueden afectar el pelaje. Un chequeo anual ayudará a detectar cualquier condición a tiempo.</p>

                <div className="alert alert-success mt-4">
                    💡 Recuerda que cada mascota es única. Si tienes dudas específicas sobre la raza o edad de tu compañero, no dudes en pedir orientación profesional.
                </div>

                <div className="d-flex gap-2 mt-4 flex-wrap">
                    <Link to="/noticias" className="btn btn-outline-secondary">← Volver a Noticias</Link>
                    <Link to="/blog/2" className="btn btn-success">Leer siguiente →</Link>
                </div>
            </article>
        </main>
    );
}