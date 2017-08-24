/*
@author Jay Milagroso
@date 2017-Aug-24 03:10pm
*/

/* ----------------- Avro Dependencies ----------------- */
const avro = require('avsc');

const schema = require('./avro-schema.js');
const type = schema.getSchema(avro);
/* ----------------- Avro Dependencies ----------------- */


/* ----------------- Data Dependencies ----------------- */
var jsonData = {kind: 'CAT', name: 'Albert'}; //
// Get buffer from data
const buf = type.toBuffer(jsonData);
/* ----------------- Data Dependencies ----------------- */

/* ----------------- HTTP Server Dependencies ----------------- */
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  //res.setHeader('Content-Type', 'text/plain'); // ? downloadable
  res.setHeader('Content-Type', 'application/json'); // ? displayable
  res.setHeader('Content-Length', Buffer.byteLength(buf, 'utf8'));
  res.write(buf);
  res.end();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
/* ----------------- HTTP Server Dependencies ----------------- */
