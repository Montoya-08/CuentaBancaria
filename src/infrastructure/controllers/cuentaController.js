/*
 * @module cuentaController
 * @description Controlador para operaciones CRUD sobre cuentas bancarias usando MongoDB.
 */

import Cuenta from "../../domain/module/Cuenta.js";

/*
 * @function createCuenta
 * @description Crea una nueva cuenta en MongoDB.
 * @param {object} req - Solicitud HTTP con los datos de la cuenta.
 * @param {object} res - Respuesta HTTP.
 */
export const createCuenta = async (req, res) => {
  try {
    const { nroCuenta, nombreCliente, saldo, totalTransacciones } = req.body;

    const nuevaCuenta = new Cuenta({
      nroCuenta,
      nombreCliente,
      saldo: Number(saldo) || 0,
      totalTransacciones: Number(totalTransacciones) || 0
    });

    await nuevaCuenta.save();

    res.status(201).json({
      message: "Cuenta creada exitosamente",
      cuenta: nuevaCuenta
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la cuenta",
      error: error.message
    });
  }
};

/*
 * @function getCuentas
 * @description Obtiene todas las cuentas desde MongoDB.
 */
export const getCuentas = async (req, res) => {
  try {
    const cuentas = await Cuenta.find();
    res.status(200).json({
      message: "Cuentas obtenidas exitosamente",
      cuentas
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las cuentas",
      error: error.message
    });
  }
};

/*
 * @function getCuentaById
 * @description Obtiene una cuenta por su ID desde MongoDB.
 */
export const getCuentaById = async (req, res) => {
  try {
    const { id } = req.params;
    const cuenta = await Cuenta.findById(id);

    if (!cuenta) {
      return res.status(404).json({ message: "Cuenta no encontrada" });
    }

    res.status(200).json({
      message: "Cuenta encontrada",
      cuenta
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la cuenta",
      error: error.message
    });
  }
};

/*
 * @function consignarSaldo
 * @description Suma un monto al saldo de una cuenta e incrementa totalTransacciones.
 */
export const consignarSaldo = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto } = req.body;
    const montoNum = Number(monto);

    if (!Number.isFinite(montoNum) || montoNum <= 0) {
      return res.status(400).json({ message: "Monto inválido" });
    }

    const cuenta = await Cuenta.findById(id);
    if (!cuenta) {
      return res.status(404).json({ message: "Cuenta no encontrada" });
    }

    cuenta.saldo += montoNum;
    cuenta.totalTransacciones = (cuenta.totalTransacciones || 0) + 1;
    await cuenta.save();

    res.status(200).json({
      message: "Consignación exitosa",
      cuenta
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al consignar saldo",
      error: error.message
    });
  }
};

/*
 * @function retirarSaldo
 * @description Resta un monto del saldo e incrementa totalTransacciones.
 */
export const retirarSaldo = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto } = req.body;
    const montoNum = Number(monto);

    if (!Number.isFinite(montoNum) || montoNum <= 0) {
      return res.status(400).json({ message: "Monto inválido" });
    }

    const cuenta = await Cuenta.findById(id);
    if (!cuenta) {
      return res.status(404).json({ message: "Cuenta no encontrada" });
    }

    if (cuenta.saldo < montoNum) {
      return res.status(400).json({ message: "Fondos insuficientes" });
    }

    cuenta.saldo -= montoNum;
    cuenta.totalTransacciones = (cuenta.totalTransacciones || 0) + 1;
    await cuenta.save();

    res.status(200).json({
      message: "Retiro exitoso",
      cuenta
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al retirar saldo",
      error: error.message
    });
  }
};

/*
 * @function deleteCuenta
 * @description Elimina una cuenta de MongoDB por su ID.
 */
export const deleteCuenta = async (req, res) => {
  try {
    const { id } = req.params;
    const cuentaEliminada = await Cuenta.findByIdAndDelete(id);

    if (!cuentaEliminada) {
      return res.status(404).json({ message: "Cuenta no encontrada para eliminar" });
    }

    res.status(200).json({
      message: "Cuenta eliminada exitosamente",
      cuenta: cuentaEliminada
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la cuenta",
      error: error.message
    });
  }
};