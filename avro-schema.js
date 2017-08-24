/*
@author Jay Milagroso
@date 2017-Aug-24 03:15pm
*/

var exports = module.exports = {};

exports.getSchema = function(avro) {

  return avro.Type.forSchema({
    type: 'record',
    fields: [
      {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG']}},
      {name: 'name', type: 'string'}
    ]
  });
}
