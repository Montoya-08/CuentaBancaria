/*
 * Caso de uso: Crear una nueva cuenta.
 *
 * Descripción:
 * Esta clase pertenece a la capa de "application/use-cases"
 * en una arquitectura limpia (Clean Architecture).
 *
 * Su responsabilidad es orquestar la acción de crear una cuenta,
 * delegando la persistencia al repositorio de cuentas.
 */

export default class CreateCuenta {

    /*
   * Ejecuta el caso de uso: crear una nueva cuenta.
   *
   * @async
   * @function
   * @param {Object} cuentaData - Datos de la cuenta a crear.
   * @param {number|string} cuentaData.id - Identificador único de la cuenta.
   * @param {string} cuentaData.nrocuenta - Nombre completo del usuario.
   