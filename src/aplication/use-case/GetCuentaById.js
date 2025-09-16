/**
 * 
 * Caso de uso: Obtener una cuenta por su ID.
 *
 * Esta clase pertenece a la capa de aplicación (use-cases) en una
 * arquitectura limpia (Clean Architecture). Su responsabilidad es
 * orquestar la búsqueda de una cuenta en el repositorio, delegando
 * la lógica de persistencia a la capa de infraestructura.
 */

export default class GetCuentaById {

  /*
   * Constructor de la clase GetCuentaById.
   *
   * @param {Object} cuentaRepository - Repositorio de cuentas encargada
   * de la comunicación con la base de datos. Debe implementar el
   * método `findById(id)`.
   */
  
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  /*
   * Ejecuta el caso de uso: Buscar una cuenta por su identificador único.
   *
   * @async
   * @param {string|number} id - Identificador único de la cuenta.
   * @returns {Promise<Object|null>} El objeto de la cuenta si existe,
   * o `null` si no se encuentra en el repositorio.
   *
   * @example
   * const getCuentaById = new GetCuentaById(cuentaRepository);
   * const cuenta = await getCuentaById.execute(123);
   *
   * if (cuenta) {
   *   console.log("Cuenta encontrada:", cuenta);
   * } else {
   *   console.log("Cuenta no existe en la base de datos");
   * }
   */

  async execute(id) {
    return await this.cuentaRepository.findById(id);
  }
}  