'use strict';

/**
 * Verifica se um verbo é valido.
 *
 * @param {string} verb Verbo que será verificado.
 * @returns {boolean} Verificação do verbo.
 * @example
 * isVerb('amar'); // true
 * isVerb('heloisa'); // false
 */
module.exports = function isVerb(verb) {
  return /(?:[aei]|pô)r$/i.test(verb);
};
