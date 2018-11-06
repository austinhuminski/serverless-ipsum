'use strict';

const ipsum = require("lorem-ipsum")
const dict = require('./dict.js')

module.exports.ipsum = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: ipsum({words: dict,}),
   };

  callback(null, response);

};
