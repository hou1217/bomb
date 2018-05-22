'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //API_ROOT: '"//192.168.2.209:8086"',
  API_ROOT:'"http://media.dc.wallan-tech.com"'
})
