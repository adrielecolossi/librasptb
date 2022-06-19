const { query } = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const database = require('../infra/database')
const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
var md5 = require('md5');



exports.saveCategoria = async function(categoria){ 
console.log(categoria)
 result = await database.query("insert into categoria(nome, midia) values ('"+ categoria.nome + "', '" + categoria.midia + "' );");
return result.rows;  
}