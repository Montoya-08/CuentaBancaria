import express from "express";
import cuentaRoutes from "../infrastructure/routes/cuentaRoutes.js";

const app = express();

/*
 * @file app.js
 * @description Configuración principal de la aplicación Express.
 * Se encarga de inicializar la aplicación, habilitar middlewares y definir las rutas base.
 */

/*
 * Inicializa una instancia de la aplicación Express.
 * @constant
 * @type {import("express").Express}
 */
 
/*
 * Middleware para parsear JSON en las solicitudes entrantes.
 * Transforma automáticamente el cuerpo (`req.body`) en un objeto JavaScript
 * si el contenido de la petición tiene `Content-Type: application/json`.
 */

app.use(express.json());

/*
 * Rutas principales para la gestión de cuentas.
 * Prefijo base: `/api/cuentas`
 *
 * - `POST /api/cuentas` → Crear una cuenta
 * - `GET /api/cuentas` → Listar todas las cuentas
 * - `GET /api/cuentas/:id` → Obtener una cuenta por ID
 * - `PUT /api/cuentas/:id` → Actualizar una cuenta por ID
 * - `DELETE /api/cuentas/:id` → Eliminar una cuenta por ID
 */

app.use("/api/cuentas", cuentaRoutes);

/*
 * Exporta la aplicación configurada para ser utilizada en el servidor principal.
 * @exports app
 */

export default app;