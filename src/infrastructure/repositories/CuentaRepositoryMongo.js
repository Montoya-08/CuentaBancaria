import mongoose from "mongoose";

/*
 * Esquema de cuenta para MongoDB.
 *
 * Define la estructura que tendrán los documentos de cuenta en la colección
 * de MongoDB. En este caso, cada cuenta tiene:
 * - `nroCuenta`: Número de la cuenta (Number).
 * - `nombreCliente`: Nombre completo del cliente (String).
 * - `saldo`: Saldo de la cuenta (String).
 */

const UserSchema = new mongoose.Schema({
  nroCuenta: Number,
  nombreCliente: String,
  saldo: String,
});

/*
 * Modelo de cuenta basado en el esquema `CuentaSchema`.
 * Este modelo permite interactuar con la colección `users`
 * en MongoDB a través de Mongoose.
 */

const CuentaModel = mongoose.model("Cuenta", CuentaSchema);

/*
 * Repositorio de cuentas usando MongoDB.
 *
 * Esta clase implementa los métodos de persistencia
 * para la entidad `Cuenta`, siguiendo el patrón **Repository**.
 * Se encarga de todas las operaciones de acceso a datos (CRUD).
 */

class CuentaRepositoryMongo {

  /*
   * Crea una nueva cuenta en la base de datos.
   *
   * @async
   * @param {Object} userData - Datos del usuario a crear.
   * @param {number} cuentaData.nroCuenta - Número de la cuenta.
   * @param {string} userData.nombreCliente - Nombre completo del cliente.
   * @param {string} userData.saldo - Saldo de la cuenta.
   * @returns {Promise<Object>} El documento de la cuenta creada.
   *
   * @example
   * const repo = new CuentaRepositoryMongo();
   * const cuenta = await repo.create({ nroCuenta: 31100018832, nombreCliente: "Angélica María Montoya Tamayo", saldo: "100000" });
   */

  async create(cuentaData) {
    const cuenta = new UserModel(cuentaData);
    return await cuenta.save();
  }

  /*
   * Obtiene todas las cuentas de la base de datos.
   *
   * @async
   * @returns {Promise<Array<Object>>} Lista de cuentas.
   *
   * @example
   * const cuentas = await repo.findAll();
   */

  async findAll() {
    return await CuentaModel.find();
  }

  /*
   * Busca una cuenta por su ID.
   *
   * @async
   * @param {string} id - Identificador único de la cuenta.
   * @returns {Promise<Object|null>} La cuenta encontrada o `null` si no existe.
   *
   * @example
   * const cuenta = await repo.findById("64f7c9...");
   */

  async findById(id) {
    return await CuentaModel.findById(id);
  }

  /*
   * Actualiza una cuenta existente.
   *
   * @async
   * @param {string} id - Identificador único de la cuenta a actualizar.
   * @param {Object} userData - Datos a modificar.
   * @returns {Promise<Object|null>} La cuenta actualizada o `null` si no existe.
   *
   * @example
   * const updated = await repo.update("64f7c9...", { saldo: "50000" });
   */

  async update(id, cuentaData) {
    return await CuentaModel.findByIdAndUpdate(id, cuentaData, { new: true });
  }

  /*
   * Elimina una cuenta por su ID.
   *
   * @async
   * @param {string} id - Identificador único de la cuenta a eliminar.
   * @returns {Promise<Object|null>} La cuenta eliminada o `null` si no existe.
   *
   * @example
   * const deleted = await repo.delete("64f7c9...");
   */

  async delete(id) {
    return await CuentaModel.findByIdAndDelete(id);
  }
}

export default CuentaRepositoryMongo;