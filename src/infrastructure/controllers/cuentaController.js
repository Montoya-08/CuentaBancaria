import { Router } from "express";
import {
  createCuenta,
  getCuentas,
  getCuentaById,
  updateCuenta,
  deleteCuenta
} from "../controllers/cuentaController";

const router = Router();

/*
 * @module CuentaRoutes
 * @description Rutas para la gestión de cuentas (CRUD).
 */

/*
 * Crea una nueva cuenta.
 * @name POST /
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {Object} req.body - Datos de la cuenta a crear.
 * @param {number} req.body.nroCuenta - Número de la cuenta.
 * @param {string} req.body.nombreCliente - Nombre completo del cliente.
 * @param {string} req.body.saldo - Saldo de la cuenta.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Usuario creado.
 */

router.post("/", createCuenta);

/*
 * Obtiene todos las cuentas.
 * @name GET /
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Array<Object>} Lista de cuentas.
 */

router.get("/", getCuentas);

/*
 * Obtiene una cuenta por su ID.
 * @name GET /:id
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {string} req.params.id - ID de la cuenta a obtener.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Cuenta encontrada o error 404 si no existe.
 */

router.get("/:id", getCuentaById);

/*
 * Actualiza una cuenta por su ID.
 * @name PUT /:id
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {string} req.params.id - ID de la cuenta a actualizar.
 * @param {Object} req.body - Datos a actualizar de la cuenta.
 * @param {string} req.body.saldo - Nuevo saldo de la cuenta.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Cuenta actualizada o error 404 si no existe.
 */

router.put("/:id", updateCuenta);

/*
 * Elimina una cuenta por su ID.
 * @name DELETE /:id
 * @function
 * @memberof module:CuentaRoutes
 * @param {Object} req - Objeto de petición HTTP.
 * @param {string} req.params.id - ID de la cuenta a eliminar.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {Object} Mensaje de confirmación o error 404 si no existe.
 */

router.delete("/:id", deleteCuenta);

export default router;