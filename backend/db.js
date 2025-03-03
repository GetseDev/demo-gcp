const { Sequelize } = require("sequelize");
require("dotenv").config();

const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseHost = process.env.DATABASE_HOST;

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: "mysql"
})

sequelize.authenticate()
  .then(() => console.log('✅ Conectado a MySQL con Sequelize'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;