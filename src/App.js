import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { SesionProvider } from './context/SesionContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Noticias from './pages/Noticias';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Categorias from './pages/Categorias';
import CategoriaDetalle from './pages/CategoriaDetalle';
import Ofertas from './pages/Ofertas';
import Checkout from './pages/Checkout';
import PagoExitoso from './pages/PagoExitoso';
import PagoError from './pages/PagoError';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminProductos from './pages/admin/AdminProductos';
import AdminProductosCriticos from './pages/admin/AdminProductosCriticos';
import AdminUsuarios from './pages/admin/AdminUsuarios';
import AdminOrdenes from './pages/admin/AdminOrdenes';
import AdminBoleta from './pages/admin/AdminBoleta';
import AdminCategorias from './pages/admin/AdminCategorias';
import AdminHistorial from './pages/admin/AdminHistorial';
import AdminReportes from './pages/admin/AdminReportes';
import AdminPerfil from './pages/admin/AdminPerfil';

export default function App() {
    return (
        <BrowserRouter>
            <SesionProvider>
                <CarritoProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/producto/:id" element={<DetalleProducto />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/noticias" element={<Noticias />} />
                        <Route path="/blog/1" element={<Blog1 />} />
                        <Route path="/blog/2" element={<Blog2 />} />
                        <Route path="/categorias" element={<Categorias />} />
                        <Route path="/categoria/:nombre" element={<CategoriaDetalle />} />
                        <Route path="/ofertas" element={<Ofertas />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/pago-exitoso/:id" element={<PagoExitoso />} />
                        <Route path="/pago-error" element={<PagoError />} />
                        <Route path="/admin" element={<AdminLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="productos" element={<AdminProductos />} />
                            <Route path="productos-criticos" element={<AdminProductosCriticos />} />
                            <Route path="usuarios" element={<AdminUsuarios />} />
                            <Route path="ordenes" element={<AdminOrdenes />} />
                            <Route path="boleta/:id" element={<AdminBoleta />} />
                            <Route path="categorias" element={<AdminCategorias />} />
                            <Route path="historial" element={<AdminHistorial />} />
                            <Route path="reportes" element={<AdminReportes />} />
                            <Route path="perfil" element={<AdminPerfil />} />
                        </Route>
                    </Routes>
                    <Footer />
                </CarritoProvider>
            </SesionProvider>
        </BrowserRouter>
    );
}