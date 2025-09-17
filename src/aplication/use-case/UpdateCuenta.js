class UpdateCuenta {

  /*
   * @param {Model} cuentaModel - Modelo Mongoose de la cuenta bancaria
   */
  constructor(cuentaModel) {
    this.cuentaModel = cuentaModel;
  }

  /*
   * Actualiza los datos básicos de la cuenta (nombrecliente, nrocuenta)
   * @param {String} id - ID de la cuenta
   * @param {Object} datos - Campos a actualizar
   * @returns {Object} - Cuenta actualizada
   */
  async actualizarDatos(id, datos) {
    const cuenta = await this.cuentaModel.findById(id);
    if (!cuenta) throw new Error("Cuenta no encontrada");

    if (datos.nombrecliente) cuenta.nombrecliente = datos.nombrecliente;
    if (datos.nrocuenta) cuenta.nrocuenta = datos.nrocuenta;

    await cuenta.save();
    return cuenta;
  }

  /*
   * Consigna dinero a la cuenta
   * @param {String} id - ID de la cuenta
   * @param {Number} monto - Monto a consignar
   * @returns {Object} - Cuenta actualizada
   */
  async consignar(id, monto) {
    if (monto <= 0) throw new Error("Monto inválido");

    const cuenta = await this.cuentaModel.findById(id);
    if (!cuenta) throw new Error("Cuenta no encontrada");

    cuenta.saldo += monto;
    await cuenta.save();
    return cuenta;
  }

  /*
   * Retira dinero de la cuenta
   * @param {String} id - ID de la cuenta
   * @param {Number} monto - Monto a retirar
   * @returns {Object} - Cuenta actualizada
   */
  async retirar(id, monto) {
    if (monto <= 0) throw new Error("Monto inválido");

    const cuenta = await this.cuentaModel.findById(id);
    if (!cuenta) throw new Error("Cuenta no encontrada");

    if (cuenta.saldo < monto) throw new Error("Fondos insuficientes");

    cuenta.saldo -= monto;
    await cuenta.save();
    return cuenta;
  }

  /*
   * Contar transacciones de la cuenta
   * @param {String} id - ID de la cuenta
   * @param {Number} monto - Monto a contar
   * @returns {Object} - Cuenta actualizada
   */

  async totaltransacciones(id, transaccion) {
    if (transaccion >= 0) throw new Error("Transaccion inválida");

    const cuenta = await this.cuentaModel.findById(id);
    if (!cuenta) throw new Error("Cuenta no encontrada");

    if (cuenta.saldo > transaccion) throw new Error("La transacción no se realizo correctamente");

    cuenta.saldo += transaccion;
    await cuenta.save();
    return cuenta;
  }
}

export default UpdateCuenta;