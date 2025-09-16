/**
 * Caso de uso: Obtener la lista de todos las cuentas.
 *
 * Esta clase pertenece a la capa de aplicación (use-cases) dentro de una
 * arquitectura limpia (Clean Architecture). Su función es orquestar la
 * acción de listar cuentas, delegando la lógica de persistencia al
 * repositorio de cuentas.
 */

export default class GetCuentas {

    /*
   * Constructor de la clase GetCuentas.
   *
   * @param {Object} userRepository - Repositorio de cuentas encargado de
   * acceder a la fuente de datos. Debe implementar el método `findAll()`.
   */
  
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }
  async execute() {
    return await this.cuentaRepository.findAll();
  }
}