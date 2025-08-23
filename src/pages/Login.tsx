

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
const Login: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesión | C.M.S Laboral - Portal Empresas</title>
        <meta name="description" content="Acceso al portal empresarial de C.M.S Laboral. Inicie sesión para gestionar los servicios de medicina ocupacional de su empresa." />
        <meta name="keywords" content="login cms laboral, acceso portal empresas, iniciar sesion medicina ocupacional, portal clientes cms" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.cms.com.ar/login" />
      </Helmet>
      <Layout>
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 pt-16">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="nombre@empresa.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button
            type="button"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          ¿No tienes cuenta? <Link to="/" className="text-emerald-600 hover:underline">Volver al inicio</Link>
        </p>
      </div>
    </div>
      </Layout>
    </>
  );
};

export default Login;