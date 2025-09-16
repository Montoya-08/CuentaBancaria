/*
 * Caso de uso: Eliminar una cuenta existente.
 *
 * Esta clase forma parte de la capa de aplicación (use-cases) en una
 * arquitectura limpia (Clean Architecture). Su única responsabilidad es
 * orquestar la eliminación de una cuenta, delegando la operación de
 * persistencia al repositorio correspondiente.
 */

export default class DeleteCuenta {

  /*
   * Inicializa el caso de uso con el repositorio de cuentas.
   *
   * @param {Object} cuentaRepository - Repositorio de cuenta que provee
   * las operaciones de acceso a datos.
   * Debe implementar un método `delete(id)` que elimine una cuenta.
   */

  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  /*
   * Ejecuta la acción de eliminar una cuenta.
   *
   * @async
   * @param {string|number} id - Identificador único de la cuenta a eliminar.
   * @returns {Promise<boolean|Object>} Resultado de la operación de eliminación.
   * Puede ser un booleano (`true/false`) o un objeto con información
   * adicional, según la implementación del repositorio.
   *
   * @example
   * const deleteCuenta = new DeleteCuenta(cuentaRepository);
   * const result = await deleteCuenta.execute(123);
   *
   * if (result) {
   *   console.log("Cuenta eliminada correctamente");
   * } else {
   *   console.log("Cuenta no encontrada o no pudo eliminarse");
   * }
   */
  
  async execute(id) {
    return await this.cuentaRepository.delete(id);
  }
}
