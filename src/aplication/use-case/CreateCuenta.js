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
   * @param {number} cuentaData.nroCuenta - Número de la cuenta.
   * @param {string} userData.nombreCliente - Nombre completo del cliente.
   * @param {string} userData.saldo - Saldo de la cuenta.
   *
   * @returns {Promise<Object>} - Retorna la cuenta creada.
   *
   * @example
   * // Ejemplo de uso en un servicio
   * const createCuenta = new CreateCuenta(cuentaRepository);
   * const newCuenta = await createCuenta.execute({
   *   id: 1,
   *   nroCuenta: 31100018832
   *   nombreCliente: "Angélica María Montoya Tamayo"
   *   saldo: "100000"
   * });
   * console.log(newCuenta);
   */

  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  async execute(cuentaData) {
    return await this.cuentaRepository.create(cuentaData);
  }
}