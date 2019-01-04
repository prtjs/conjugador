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
    return ehIrregular(verbo)
      ? irregulares[verbo]
      : construir(verbo);
  }

  throw new Error("Verbo inválido.");
}

module.exports = conjugar;
