'use strict';

var build = require('./src/build');
var irregularsList = require('./src/irregulars-list');
var isIrregular = require('./src/is-irregular');
var isVerb = require('./src/is-verb');

/**
 * Conjugar qualquer verbo (regular ou irregular).
 *
 * @param {string} verb Um verbo qualquer.
 * @returns {object} Toda as conjugações.
 */
module.exports = function conjugate(verb) {
  if (!isVerb(verb)) {
    throw new Error('Invalid verb');
  }

  return isIrregular(verb)
    ? irregularsList[verb]
    : build(verb);
}
