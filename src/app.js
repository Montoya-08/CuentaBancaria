import "dotenv/config.js";
import connectDB from "./config/database.js";
import app from "./interfaces/server.js";

const PORT = process.env.PORT || 3000;

/*
 * @file server.js
 * @description Punto de entrada principal de la aplicación.
 * Se encarga de:
 * - Cargar las variables de entorno.
 * - Conectar a la base de datos.
 * - Iniciar el servidor Express en el puerto configurado.
 */

/*
 * Puerto en el que se ejecuta el servidor.
 * Se obtiene de la variable de entorno `PORT` o se asigna el valor por defecto `3000`.
 * @constant
 * @type {number}
 */
 
/*
 * Conecta a la base de datos MongoDB y, una vez exitosa la conexión,
 * inicia el servidor Express.
 *
 * @function
 * @returns {Promise<void>} Una promesa que se resuelve cuando la base de datos está conectada
 * y el servidor comienza a escuchar.
 */

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
  );
});