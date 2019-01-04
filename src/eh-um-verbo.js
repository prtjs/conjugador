"use strict";

/**
 * Verifica se um verbo é valido.
 *
 * @param {String} verbo - Verbo que será verificado.
 * @returns {Boolean}
 *
 * @example
 * ehValido("amar"); // true
 * ehValido("heloisa"); // false
 */
function ehValido(verbo) {
  return /(?:[aei]|pô)r$/i.test(verbo);
}

module.exports = ehValido;
