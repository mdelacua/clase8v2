import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

//importamos la funciond e la conexion de la BD
import conectarDB from './database/conexion.js';
//ejecuto la conexion a la BD
conectarDB()

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`);
});
 

