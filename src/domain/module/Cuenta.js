/*
 * Entidad de dominio: Cuenta.
 *
 * Esta clase representa el modelo de una cuenta dentro de la capa de dominio
 * en una arquitectura limpia (Clean Architecture).
 *
 * Su responsabilidad es definir las propiedades esenciales de una cuenta
 * sin importar la base de datos o el framework que se use.
 */

class Cuenta {

    /*
     * Constructor de la clase Cuenta.
     *
     * @param {Object} params - Parámetros de inicialización de la cuenta.
     * @param {Object} cuentaData - Datos de la cuenta a crear.
     * @param {number|string} cuentaData.id - Identificador único de la cuenta.
     * @param {number} cuentaData.nroCuenta - Número de la cuenta.
     * @param {string} userData.nombreCliente - Nombre completo del cliente.
     * @param {string} userData.saldo - Saldo de la cuenta.
     *
    */

    constructor({ id, nroCuenta, nombreCliente, saldo }) {
      this.id = id; // Asigna el identificador único al objeto creado
      this.nroCuenta = nroCuenta; // Asigna el número de cuenta al objeto
      this.nombreCliente = this.nombreCliente; // Asigna el nombre al cliente del objeto
      this.saldo = saldo; // Asigna el saldo al objeto
    }
  }
 
  export default Cuenta; // Exporta la clase para usarla en otras capas del proyecto  