const sequelize = require('sequelize');
const { host, user, password, database, port } = require('../config.js');
const Promise = require('bluebird');
const options = { promiseLib: Promise };
const pgp = require('pg-promise')(options);
const pg = require('pg');
const { Pool, Client } = require('pg');

// pg.defaults.poolSize = 20;

// const pool = new Pool({
//   user: user,
//   host: host,
//   database: database,
//   password: password,
//   port: port,
//   idleTimeoutMillis: 50000,
//   connectionTimeoutMillis: 20000
// });

// const client = new Client({
//   user: user,
//   host: host,
//   database: database,
//   password: password,
//   port: port,
// })

// client.connect();

// client.on('error', (err) => {
//   console.error('CLIENT An idle client has experienced an error', err.stack)
// });

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release()
//     if (err) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows)
//   })
// });

// pool.on('error', (err) => {
//   console.error('POOL An idle client has experienced an error', err.stack)
// })



// module.exports = pool;

const connection = {
  host: host,
  port: port,
  database: database,
  user: user,
  password: password
};
const db = pgp(connection);

module.exports.db = db;