"use strict";

var construir = require("./lib/construir");
var ehIrregular = require("./lib/eh-irregular");
var ehUmVerbo = require("./lib/eh-um-verbo");
var irregulares = require("./lib/irregulares");

/**
 * Conjugar qualquer verbo (regular ou irregular).
 *
 * @param {String} verbo - Um verbo qualquer.
 * @returns {Object} Toda as conjugações.
 */
function conjugar(verbo) {
  if (ehUmVerbo(verbo)) {
    if (ehIrregular(verbo)) {
      return irregulares[verbo];
    } else {
      return construir(verbo);
    }
  } else {
    throw new Error("Verbo inválido.");
  }
}

module.exports = conjugar;
