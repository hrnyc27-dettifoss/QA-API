const sequelize = require('sequelize');
const { host, user, password, database, port } = require('../config.js');
const Promise = require('bluebird');
const options = { promiseLib: Promise };
const pgp = require('pg-promise')(options);
const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: user,
//   host: host,
//   database: database,
//   password: password,
//   port: port,
// });

// pool.on('error', (err) => {
//   console.error('An idle client has experienced an error', err.stack)
// })

// const client = new Client({
//   user: user,
//   host: host,
//   database: database,
//   password: password,
//   port: port,
// })

// client.connect();

const connection = {
  host: host,
  port: port,
  database: database,
  user: user,
  password: password
};
const db = pgp(connection);

module.exports = db;