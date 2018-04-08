"use strict";

var irregulares = require("./irregulares");

/**
 * Verifica se um verbo é irregular.
 *
 * Não entenderá verbos terminados em -pôr como irregular.
 *
 * @param {String} verbo - Verbo que será verificado.
 * @returns {Boolean}
 *
 * @example
 * ehIrregular("ser"); // true
 * ehIrregular("amar"); // false
 */
function ehIrregular(verbo) {
  return irregulares.hasOwnProperty(verbo);
}

module.exports = ehIrregular;
