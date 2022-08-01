const db = require('../services/db');
const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM simacota LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function validateCreate(humedad) {
  let messages = [];

  console.log(humedad);

  if (!humedad) {
    messages.push('No object is provided');
  }

//   if (!quote.quote) {
//     messages.push('Quote is empty');
//   }

//   if (!quote.author) {
//     messages.push('Author is empty');
//   }
  
  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

function create(humedadObj) {
  validateCreate(humedadObj);
  
  const { humedad_suelo1, 
        humedad_suelo2, 
        humedad_suelo3, 
        humedad_suelo4,
        temperatura,
        humedad_ambiente } = humedadObj;

  const result = db.run('INSERT INTO simacota (humedad_suelo1, humedad_suelo2, humedad_suelo3, humedad_suelo4, temperatura, humedad_ambiente) VALUES (@humedad_suelo1, @humedad_suelo2, @humedad_suelo3, @humedad_suelo4, @temperatura, @humedad_ambiente)', { humedad_suelo1, humedad_suelo2, humedad_suelo3, humedad_suelo4, temperatura, humedad_ambiente });
  
  let message = 'Error in creating quote';
  if (result.changes) {
    message = 'Quote created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}