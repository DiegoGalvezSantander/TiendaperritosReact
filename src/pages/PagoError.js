import React from 'react';
import { Link } from 'react-router-dom';

export default function PagoError() {
    return (
        <main className="container py-5">
            <div className="card p-4 mx-auto text-center shadow-sm" style={{ maxWidth: '700px' }}>
                <div className="alert alert-danger"><h2 className="mb-0">❌ No se pudo realizar el pago</h2></div>
                <p>Hubo un problema al procesar tu pago.</p>
                <Link to="/checkout" className="btn btn-success">Volver a intentar</Link>
            </div>
        </main>
    );
}