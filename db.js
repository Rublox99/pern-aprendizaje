//PERMITE CREAR UNA CONEXIÓN MEDIANTE UN OBJETO
const { Pool } = require("pg")

//OBJETO DE CONFIGURACIÓN; USER, CONTRASEÑA, ETC
const pool = new Pool ({
    user: 'postgres',
    password: 'googletop1999!',
    host: 'localhost',
    port: '5432',
    database: 'tasksdb'
});

module.exports = pool;