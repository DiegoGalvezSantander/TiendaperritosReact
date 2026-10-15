import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog2() {
    return (
        <main className="container py-5">
            <article className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '800px' }}>
                <span className="text-muted">📅 09 de Septiembre, 2026</span>
                <h1 className="mt-2" style={{ color: '#334b36' }}>¿Es recomendable darle Churu a tus gatitos?</h1>
                <img src="/IMG/PerroYgato.jpg" alt="Gato comiendo Churu" className="img-fluid rounded my-3" />

                <p>El Churu (o snacks húmedos en crema) se ha convertido en el favorito de muchos felinos y sus dueños. Pero, ¿realmente es bueno para ellos? La respuesta es sí, siempre que se use de forma adecuada.</p>

                <h3 style={{ color: '#334b36' }}>¿Qué es el Churu?</h3>
                <p>Es un snack húmedo, cremoso y altamente palatable que suele venir en sobres individuales. Está compuesto principalmente por agua, proteínas de alta calidad y vitaminas.</p>

                <h3 style={{ color: '#334b36' }}>Principales beneficios</h3>
                <ul>
                    <li><strong>Hidratación extra:</strong> Tiene un alto contenido de agua (80-85%).</li>
                    <li><strong>Refuerzo positivo:</strong> Excelente para usar como premio durante el entrenamiento.</li>
                    <li><strong>Ayuda a administrar medicamentos:</strong> Muchos dueños lo usan para esconder pastillas.</li>
                    <li><strong>Bajo en calorías:</strong> Aproximadamente 6-8 kcal por sobre.</li>
                </ul>

                <h3 style={{ color: '#334b36' }}>¿Con qué frecuencia darlo?</h3>
                <p>Los expertos recomiendan ofrecerlo como un premio ocasional (1 o 2 veces al día) y no como sustituto de la comida principal.</p>

                <div className="alert alert-success mt-4">
                    💡 En conclusión, el Churu es una excelente opción para consentir a tu minino y mantenerlo hidratado. ¡Con medida y responsabilidad!
                </div>

                <div className="d-flex gap-2 mt-4 flex-wrap">
                    <Link to="/noticias" className="btn btn-outline-secondary">← Volver a Noticias</Link>
                    <Link to="/blog/1" className="btn btn-success">Leer anterior →</Link>
                </div>
            </article>
        </main>
    );
}