'use strict';

const { Pool } = require('pg')

const connectionData = {
    user: 'team61_user',
    host: 'ds4a-demo-instance.caqxxrh2nm4r.us-east-2.rds.amazonaws.com',
    database: 'ds4a_team61',
    password: 'ds4at34m61',
    port: 5432,
  }
  const pool = new Pool(connectionData)
  module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }