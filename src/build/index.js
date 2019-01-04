'use strict';

var parseVerb = require('./parse-verb');
var buildAr = require('./suffixes/build-ar');
var buildEr = require('./suffixes/build-er');
var buildIr = require('./suffixes/build-ir');
var buildPor = require('./suffixes/build-por');

/**
 * Obter toda a conjugação de um verbo.
 *
 * Somente para verbos terminados em -ar, -er, ir ou -pôr.
 *
 * @param {string} verb Um verbo.
 * @returns {object} Toda a conjugação do verbo.
 */
module.exports = function build(verb) {
  var data = parseVerb(verb);

  switch (data.suffix) {
    case 'ar':
      return buildAr(data.prefix);
      break;
    case 'er':
      return buildEr(data.prefix);
      break;
    case 'ir':
      return buildIr(data.prefix);
      break;
    case 'pôr':
      return buildPor(data.prefix);
      break;
  }
}
