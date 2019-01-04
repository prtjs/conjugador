'use strict';

var irregularsList = require('./irregulars-list');

/**
 * Verifica se um verbo é irregular.
 *
 * Não entenderá verbos terminados em -pôr como irregular.
 *
 * @param {string} verb Verbo que será verificado.
 * @returns {boolean}
 * @example
 * isIrregular('ser') // true
 * isIrregular('amar') // false
 */
module.exports = function isIrregular(verb) {
  return irregularsList.hasOwnProperty(verb);
};
