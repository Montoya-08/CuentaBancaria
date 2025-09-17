/*
 * @module CuentaModel
 * @description Modelo Mongoose para la entidad Cuenta.
 * Este archivo define cómo se estructura una cuenta en la base de datos MongoDB.
 */

import mongoose from "mongoose";

/*
 * @constant cuentaSchema
 * @description Esquema de Mongoose que define los campos de una cuenta.
 * - nroCuenta: número único de la cuenta bancaria.
 * - nombreCliente: nombre completo del titular.
 * - saldo: cantidad de dinero disponible en la cuenta.
 * - transacciones: cantidad de transacciones.
 */

const cuentaSchema = new mongoose.Schema({
  nroCuenta: {
    type: Number,
    required: true,
    unique: true // Evita duplicados de número de cuenta
  },
  nombreCliente: {
    type: String,
    required: true
  },
  saldo: {
    type: Number,
    default: 0,
    min: 0 // No permite saldos negativos al crear
  },
  totalTransacciones: {
    type: Number,
    default: 0,
    min: 0 // No permite valores negativos
  }
});

/*
 * @constant CuentaModel
 * @description Modelo Mongoose basado en el esquema definido.
 * Este modelo se usa para interactuar con la colección 'cuentas' en MongoDB.
 */

const CuentaModel = mongoose.model("Cuenta", cuentaSchema);

export default CuentaModel;
