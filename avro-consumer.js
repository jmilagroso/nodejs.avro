/*
@author Jay Milagroso
@date 2017-Aug-24 03:43pm
*/

/* ----------------- Avro Dependencies ----------------- */
const avro = require('avsc');
const schema = require('./avro-schema.js');
const type = schema.getSchema(avro);
/* ----------------- Avro Dependencies ----------------- */

/* ----------------- Async HTTP Client Dependencies ----------------- */
var http = require('http');
var asyncClient = require('async');

// Use async lib to perform http request.
asyncClient.waterfall([
  function (callback) {
    http.get(
      {
        host: 'localhost',
        port: 3000,
        path: '/'
      }, function(resp){
        resp.on('data', function(chunk){
          console.log('Avro serialised: ' + chunk);
          console.log('Bytes: ' + Buffer.byteLength(chunk, 'utf8') + " bytes");
          // null ~ error
          callback(null, chunk);
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
        callback(error, null);
      });
    }, function (buffer, callback) {

      const v = type.fromBuffer(buffer);
      callback(null, v);
    }
  ], function(error, result) { // main callback
    console.log('--------------------------------------');
    console.log('Avro deserialised: ' + result);
    console.log('Bytes: ' + Buffer.byteLength(result, 'utf8') + " bytes");
});

/* ----------------- Async HTTP Client Dependencies ----------------- */

/* ----------------- Console output ----------------- */
/*
Avro serialised:
                 Albert
Bytes: 8 bytes  //Bytes passed over HTTP
--------------------------------------
Avro deserialised: {"kind":"CAT","name":"Albert"}
Bytes: 30 bytes //Actual bytes

*/
/* ----------------- Console output ----------------- */

//8 bytes VS 30 bytes ~ 73% smaller data size using avro! FTW!
